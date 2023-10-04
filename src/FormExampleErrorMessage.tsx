import { useForm, SubmitHandler } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  name: string
  gender: GenderEnum,
  age:number,
  email:string,
  password:string,
  checkbox:string,
}


export const FormExample = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Datos personales</legend>
        <label >Nombre</label>
        <input type="text" id="name" {...register('name'),
        { required: true, maxLength: 20 }} 
        aria-invalid={errors.name ? "true" : "false"}/>
      {/* {errors.name?.type === "required" && (
        <p role="alert">First name is required</p>
      )} */}
        <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => <p>{message}</p>}
      />
        {/* <label>Edad</label>
        <input type="number" id="age" aria-label="Edad" {...register('age')}/>
        <select id="gender" {...register('gender')}>
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option>
        </select> */}
      </fieldset>
      {/* <fieldset> */}
        {/* <legend>Cuenta</legend>
        <label>Contraseña</label>
        <input type="password" id="password" aria-label="Contraseña" {...register('password')}/>
        <label>Email</label>
        <input type="email" id="email" aria-label="Email" {...register('email')}/>
        <input
          type="checkbox"
          id="allAccepted"
          aria-aria-describedby="allAcceptedLabel"
          {...register('checkbox')}
        />
        <label>
          Ok?
        </label>
      </fieldset> */}


      <input type="submit" />
    </form>
  );
};
