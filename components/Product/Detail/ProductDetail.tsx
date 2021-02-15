import React, { useState } from 'react';
import { useRouter } from 'next/router';

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

  const handleSecondLevelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
  };

  const handleDeleteButton = () => {
    const response = confirm(
      `Are you sure you want to delete ${product.title}`
    );
    if (response === true) {
      deleteProduct(product.id!);
      push('/');
    }
  };

  return (
    <Container>
      <TitleDeleteButtonWrapper>
        <Title>{product.title}</Title>
        <DeleteButton onClick={handleDeleteButton} width={24} height={24} />
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
