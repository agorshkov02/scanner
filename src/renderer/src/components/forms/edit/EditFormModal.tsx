import EditForm, { EditFormProps } from '@components/forms/edit/EditForm'
import Modal from '@mui/material/Modal'
import { FC } from 'react'

type EditFormModalProps = {
  open: boolean
  onClose: () => void
} & Omit<EditFormProps, 'afterEdit'>

const EditFormModal: FC<EditFormModalProps> = ({ dvkey, dvvalue, open, onClose }) => {
  const afterEdit = () => onClose()
  return (
    <Modal open={open} onClose={onClose}>
      <EditForm dvkey={dvkey} dvvalue={dvvalue} afterEdit={afterEdit} />
    </Modal>
  )
}

export default EditFormModal
