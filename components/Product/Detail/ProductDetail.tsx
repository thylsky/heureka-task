import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import intl from 'react-intl-universal';

import Container from 'components/UI/Container';
import DeleteButton from 'components/UI/DeleteButton';
import Title from 'components/UI/Title';

import { deleteProduct, Product, updateProduct } from 'db/product';

import { TitleDeleteButtonWrapper } from './ProductDetail.styles';
import ProductForm from '../Form';

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  const {
    id,
    title,
    description,
    image,
    price,
    slug,
    createdAt,
    updatedAt,
  } = product;

  const [formValues, setFormValues] = useState<Product>({
    title,
    description,
    image,
    price,
    slug,
    createdAt,
    updatedAt,
  });
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { push } = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setError('');
    setSubmitting(true);
    try {
      updateProduct(id!, formValues);
      push('/');
    } catch (err) {
      setError(
        err.code === 'auth/user-not-found'
          ? 'E-mail/password combination is wrong.'
          : err.message
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleSecondLevelChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const split = e.target.name.split('.');

      setFormValues(prevState => {
        return {
          ...prevState,
          [split[0]]: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ...prevState[split[0]],
            [e.target.name.split('.')[1]]: e.target.value,
          },
        };
      });
    },
    [setFormValues]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const isSecondLevel = e.target.name.split('.').length === 2;

      if (isSecondLevel) {
        handleSecondLevelChange(e);
      } else {
        setFormValues(prevState => {
          return {
            ...prevState,
            [e.target.name]: e.target.value,
          };
        });
      }
    },
    [handleSecondLevelChange]
  );

  const handleDeleteProduct = useCallback(() => {
    const response = confirm(
      intl.get('PRODUCT.DELETE_CONFIRM', { productName: product?.title })
    );
    if (response === true) deleteProduct(product!.id!);
  }, [product]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'BODY' &&
        ['Backspace', 'Delete'].indexOf(event.key) > -1
      ) {
        handleDeleteProduct();
      }
    },
    [handleDeleteProduct]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // cleanup this component
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Container>
      <TitleDeleteButtonWrapper>
        <Title>{product.title}</Title>
        <DeleteButton onClick={handleDeleteProduct} width={24} height={24} />
      </TitleDeleteButtonWrapper>

      <ProductForm
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        isSubmitting={isSubmitting}
        submitButtonLabel="Update"
      />
    </Container>
  );
};

export default ProductDetail;
