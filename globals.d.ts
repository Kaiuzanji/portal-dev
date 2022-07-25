type FormFileValue = {
  filename: string,
  type: string,
  size: number
  dataUrl: string | ArrayBuffer | null
  preview: string
}

type SignInFormValueType = {
  email: string,
  password: string
}

type SignUpFormValueType = {
  fullName: string,
  cpf: string,
  avatar: FormFileValue | null,
  email: string,
  password: string
}