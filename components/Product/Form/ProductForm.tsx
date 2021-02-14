import React from 'react';

import Button from 'components/UI/Button';
import ErrorMessage from 'components/UI/ErrorMessage';
import FormInput from 'components/UI/Input';
import TextArea from 'components/UI/TextArea';

import { Product } from 'db/product';

type Props = {
  formValues: Product;
  isSubmitting: boolean;
  handleSubmit: (e: React.SyntheticEvent) => Promise<void>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  submitButtonLabel: string;
  error?: string;
};

const ProductForm = ({
  formValues,
  isSubmitting,
  handleSubmit,
  handleChange,
  submitButtonLabel,
  error,
}: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormInput
        onChange={handleChange}
        value={formValues.title}
        label="Title"
        name="title"
        type="text"
        autoComplete="off"
        required
      />
      <TextArea
        onChange={handleChange}
        label="Description"
        name="description"
        required
        rows={5}
        value={formValues.description}
      />
      <FormInput
        onChange={handleChange}
        value={formValues.image.url}
        label="Image URL"
        name="image.url"
        type="text"
        autoComplete="off"
        required
      />
      <FormInput
        onChange={handleChange}
        value={formValues.image.alt}
        label="Image Alternative Text"
        name="image.alt"
        type="text"
        autoComplete="off"
        required
      />
      <FormInput
        onChange={handleChange}
        value={formValues.price.value}
        label="Price"
        name="price.value"
        type="number"
        autoComplete="off"
        required
      />

      <FormInput
        onChange={handleChange}
        value={formValues.price.currency}
        label="Currency"
        name="price.currency"
        type="text"
        autoComplete="off"
        required
      />

      <Button type="submit" disabled={isSubmitting}>
        {submitButtonLabel}
      </Button>
    </form>
  );
};

export default ProductForm;
