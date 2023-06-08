import { FC, useState, useImperativeHandle, forwardRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

import styles from './Modal.module.scss'

const dropIn = {
	hidden: {
		y: '-100vh',
		opacity: 0
	},
	visible: {
		y: '0',
		opacity: 1
	},
	exit: {
		y: '100vh',
		opacity: 0
	}
}

const Modal: FC<any> = forwardRef(({ children, className }, ref) => {
	const [open, setOpen] = useState(false)

	useImperativeHandle(ref, () => ({
		open: () => setOpen(true),
		close: () => setOpen(false)
	}))

	return (
		<AnimatePresence mode='wait'>
			{open && (
				<motion.div
					className={styles.modal}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setOpen(false)}
				>
					<motion.div
						className={clsx(styles.modal__container, className)}
						onClick={e => e.stopPropagation()}
						variants={dropIn}
						initial='hidden'
						animate='visible'
						exit='exit'
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
})

Modal.displayName = 'Modal'

export default Modal
