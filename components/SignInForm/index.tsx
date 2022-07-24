import { ChangeEvent } from "react"

interface SignInFormProps {
  signInFormValues: SignInFormValueType,
  setSignInFormValues: (value: SignInFormValueType) => void
}

export default ({ signInFormValues, setSignInFormValues  }: SignInFormProps) => {

  const handleChangeFormValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSignInFormValues({
      ...signInFormValues,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form className="space-y-4" autoComplete='off'>
      <div className="rounded-md -space-y-px flex flex-col gap-2">
        <div>
          <label htmlFor="email-address" className="dark:text-zinc-300">Email address</label>
          <input onChange={handleChangeFormValue} id="email" name="email" type="email" value={signInFormValues.email} className="appearance-none rounded-md bg-transparent relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-[#20bead] focus:border-[#20bead] focus:z-10 sm:text-sm" placeholder="Email" required />
        </div>
        <div>
          <label htmlFor="password" className="dark:text-zinc-300">Password</label>
          <input onChange={handleChangeFormValue} id="password" name="password" type="password" value={signInFormValues.password} className="rounded-md bg-transparent form-input relative block w-full placeholder-gray-500 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-[#20bead] focus:border-[#20bead] focus:z-10 sm:text-sm" placeholder="Senha" required  />
        </div>
      </div>
      <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#20bead] focus:outline-none">Entrar</button>
    </form>
  )
}