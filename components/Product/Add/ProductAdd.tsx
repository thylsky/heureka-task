import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Container from 'components/UI/Container';
import Title from 'components/UI/Title';

import { createProduct, Product } from 'db/product';

import ProductForm from '../Form';

const ProductDetail = () => {
  const [formValues, setFormValues] = useState<Product>({
    title: '',
    description: '',
    image: {
      url: '',
      alt: '',
    },
    price: {
      value: 0,
      currency: 'CZK',
    },
    slug: '',
  });
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { push } = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setError('');
    setSubmitting(true);
    try {
      createProduct(formValues);
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

  return (
    <Container>
      <Title>Add New Product</Title>

      <ProductForm
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        isSubmitting={isSubmitting}
        submitButtonLabel="Create"
      />
    </Container>
  );
};

export default ProductDetail;
