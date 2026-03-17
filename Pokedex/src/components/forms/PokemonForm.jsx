import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  Label,
  Input,
  NumberInput,
  SubmitButton,
} from "./PokemonForm.styled";

const PokemonForm = ({ defaultValues, onSubmit, isEdit }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {!isEdit && (
        <FormField>
          <Label>Nazwa pokemona:</Label>
          <Input
            {...register("name", { required: true })}
            placeholder="Nazwa"
          />
        </FormField>
      )}

      <FormField>
        <Label>{isEdit ? "Nowa waga (kg):" : "Waga (kg):"}</Label>
        <NumberInput
          {...register("weight", {
            required: true,
            valueAsNumber: true,
          })}
          placeholder="Waga"
        />
      </FormField>

      <FormField>
        <Label>{isEdit ? "Nowy wzrost (dm):" : "Wzrost (dm):"}</Label>
        <NumberInput
          {...register("height", {
            required: true,
            valueAsNumber: true,
          })}
          placeholder="Wzrost"
        />
      </FormField>

      <FormField>
        <Label>{isEdit ? "Nowe doświadczenie:" : "Doświadczenie:"}</Label>
        <NumberInput
          {...register("baseExperience", {
            required: true,
            valueAsNumber: true,
          })}
          placeholder="EXP"
        />
      </FormField>

      {!isEdit && (
        <FormField>
          <Label>ID grafiki:</Label>
          <NumberInput {...register("imageId")} placeholder="Grafika ID" />
        </FormField>
      )}

      <SubmitButton type="submit" $isEdit={isEdit}>
        {isEdit ? "Zmień atrybuty" : "Stwórz"}
      </SubmitButton>
    </Form>
  );
};

export default PokemonForm;
