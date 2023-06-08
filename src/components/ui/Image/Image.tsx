import NextImage from 'next/image'
import { useEffect, useState } from 'react'

declare const navigator: any

import styles from './Image.module.scss'

const Image = (props: any) => {
	const [loading, setLoading] = useState(props.loading)
	const [fadeIn, setFadeIn] = useState(false)

	useEffect(() => {
		// Skip if image is already eager or has priority (disables lazy loading)
		if (props.loading === 'eager' || props.priority) {
			return
		}

		if (!isMobileConnection()) {
			let clearDefer: any
			// Set loading to eager if all resources of document are loaded, but defer it a bit
			const onLoad = () => {
				clearDefer = defer(() => setLoading('eager'))
			}
			window.addEventListener('load', onLoad)
			return () => {
				// Clean up the load event listener and an eventual defer
				window.removeEventListener('load', onLoad)
				if (clearDefer) {
					clearDefer()
				}
			}
		}
	}, [props.loading, props.priority])

	return (
		<NextImage
			loading={loading}
			{...props}
			objectFit='cover'
			quality={100}
			onLoadingComplete={() => setFadeIn(true)}
			className={fadeIn ? styles.show : styles.hide}
		/>
	)
}

const isMobileConnection = () => {
	const connection =
		navigator.connection ||
		navigator.mozConnection ||
		navigator.webkitConnection

	return (
		connection?.type === 'cellular' ||
		connection?.effectiveType === 'slow-2g' ||
		connection?.effectiveType === '2g' ||
		connection?.effectiveType === '3g' ||
		connection?.saveData === true
	)
}

const defer = (callback: any) => {
	// Check if we can use requestIdleCallback
	if (window.requestIdleCallback) {
		const handle = window.requestIdleCallback(callback)
		return () => window.cancelIdleCallback(handle)
	}
	// Just defer using setTimeout with some random delay otherwise
	const handle = setTimeout(callback, 2345 + Math.random() * 1000)
	return () => clearTimeout(handle)
}

export default Image

// import { FC, useState } from 'react'
// import { default as NextImage } from 'next/image'

// import styles from './Image.module.scss'

// interface IProps {
// 	src?: string
// 	alt: string
// 	width?: number
// 	height?: number
// 	priority?: boolean
// 	position?: 'top' | 'bottom' | 'center'
// 	layout: 'intrinsic' | 'fixed' | 'responsive' | 'fill'
// }

// const Image: FC<IProps> = ({
// 	alt,
// 	width,
// 	height,
// 	layout,
// 	priority = false,
// 	position = 'center',
// 	src = '/images/placeholder.png'
// }) => {
// 	const [loading, setLoading] = useState<boolean>(true)

// 	return (
// 		<NextImage
// 			quality={100}
// 			objectFit='cover'
// 			objectPosition={position}
// 			priority={priority}
// 			src={src}
// 			alt={alt}
// 			width={width}
// 			height={height}
// 			layout={layout}
// 			onLoadingComplete={() => setLoading(false)}
// 			className={loading ? styles.hide : styles.show}
// 		/>
// 	)
// }

// export default Image
