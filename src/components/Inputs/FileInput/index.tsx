import { useDropzone } from 'react-dropzone'

interface FileInputProps {
  handleChangeFile: (file: FormFileValue, identifier: string) => void,
  identifier: string
}

export default ({ handleChangeFile, identifier }: FileInputProps) => {
  const {getRootProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.png']
    },
    onDrop: acceptedFiles => {
      acceptedFiles.map(file => {
        const reader = new FileReader()
        reader.onabort = () => alert('file reading was aborted')
        reader.onerror = () => alert('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
          const binaryStr = reader.result
          handleChangeFile({  
            filename: file.name,
            size: file.size,
            type: file.type,
            dataUrl: binaryStr,
            preview: URL.createObjectURL(file)
          }, identifier)
        }
        reader.readAsDataURL(file)
      });
    }
  });

  return (
    <div {...getRootProps({className: 'dropzone'})}>
      <label htmlFor="avatar" className="relative cursor-pointer flex flex-row text-[#20bead] rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2">
        <span>Upload a file</span>
        <p className="pl-1">or drag and drop</p>
      </label>
    </div>
  )
}