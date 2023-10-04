import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
  name: string
}

const initialValues =  {
  name: 'paco'
}


export const FormExample = () => {
  const {name} = initialValues
  const { register,watch, handleSubmit, formState: { errors } } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  console.log(watch("name")) // watch input value by passing the name of it
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Datos personales</legend>
        <label >Nombre</label>
        <input defaultValue={name} type="text" id="name" {...register('name'),
        { required: true, maxLength: 20 }} 
        aria-invalid={errors.name ? "true" : "false"}/>
      {errors.name && (
        <p role="alert">First name is required</p>
      )}
</fieldset>
      <input type="submit" />
    </form>
  );
};
