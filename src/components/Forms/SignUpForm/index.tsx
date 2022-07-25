import { ChangeEvent, FormEvent } from 'react'
import FileInput from '../../Inputs/FileInput'
import { Trash } from 'phosphor-react'
import InputMask from 'react-input-mask'

interface SignUpFormProps {
  signUpFormValues: SignUpFormValueType,
  setSignUpFormValues: (value: SignUpFormValueType) => void,
  handleSubmitSignUpForm: (event: FormEvent<HTMLFormElement>) => void
}

export default ({ signUpFormValues, setSignUpFormValues, handleSubmitSignUpForm }: SignUpFormProps) => {

  const handleChangeFormValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSignUpFormValues({
      ...signUpFormValues,
      [event.target.name]: event.target.value
    })
  }

  const handleChangeFormFile = (file:FormFileValue, identifier: string) => {
    setSignUpFormValues({
      ...signUpFormValues,
      [identifier]: file
    })
  }

  return (
    <form className="mt-8 space-y-4" autoComplete='off' onSubmit={handleSubmitSignUpForm}>
      <div className="rounded-md -space-y-px flex flex-col gap-2">
        <div className="flex flex-row gap-2">            
          <div className='w-full'>
            <label htmlFor="full-name" className="dark:text-zinc-300">Full name</label>
            <input onChange={handleChangeFormValue} id="full-name" name="fullName" type="text" value={signUpFormValues.fullName} className="appearance-none rounded-md bg-transparent relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-[#20bead] focus:border-[#20bead] focus:z-10 sm:text-sm" placeholder="Enter your full name" required />
          </div>
          <div className='w-full'>
            <label htmlFor="email-address" className="dark:text-zinc-300">Email address</label>
            <input onChange={handleChangeFormValue} id="email-address" name="email" type="email" value={signUpFormValues.email} className="appearance-none rounded-md bg-transparent relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-[#20bead] focus:border-[#20bead] focus:z-10 sm:text-sm" placeholder="Enter your email address" required />
          </div>
        </div>
        <div className='w-full'>
          <label htmlFor="cpf" className="dark:text-zinc-300">CPF</label>
          <InputMask mask="999.999.999-99" onChange={handleChangeFormValue} id="cpf" name="cpf" type="text" value={signUpFormValues.cpf} className="appearance-none rounded-md bg-transparent relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-[#20bead] focus:border-[#20bead] focus:z-10 sm:text-sm" placeholder="Enter your CPF" required />
        </div>
        <div>
          <label htmlFor="password" className="dark:text-zinc-300">Password</label>
          <input 
          onChange={handleChangeFormValue} 
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"  
          name="password" 
          type="password" 
          value={signUpFormValues.password} 
          className="rounded-md bg-transparent form-input relative block w-full placeholder-gray-500 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-[#20bead] focus:border-[#20bead] focus:z-10 sm:text-sm" 
          placeholder="Enter your password" title='Pelo menos uma letra maiúscula, uma letra minúscula, um número e um símbolo, símbolos permitidos --> !@#$%^&*_=+-
          Mínimo 8 caracteres e Máximo 12 caracteres' required  />
        </div>
        <div>
          <label htmlFor="cpf" className="dark:text-zinc-300">Avatar</label>
          <div className="mt-1 flex justify-center pt-2 pb-2 border-2 border-gray-500 border-dashed rounded-md">
            <div className="text-center flex flex-col justify-center items-center">
              { 
                signUpFormValues.avatar ? (
                  <div className='flex flex-col justify-center items-center relative group'>
                    <img src={signUpFormValues.avatar.preview} alt={signUpFormValues.avatar.filename} width={60} className="rounded-md group-hover:opacity-50 self-center"/>
                    <Trash size={28} className="absolute mb-4 text-zinc-800 opacity-0 group-hover:opacity-100" onClick={() => setSignUpFormValues({...signUpFormValues, avatar: null}) }/>
                    <p className="text-xs text-gray-500 p-1">{signUpFormValues.avatar.filename}</p>
                  </div>
                ) : (
                  <>
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <FileInput handleChangeFile={handleChangeFormFile} identifier="avatar" />
                    <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#20bead] focus:outline-none">Registrar-se</button>
    </form>
  )
}