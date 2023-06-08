export const useHandleChange = (updateFunction: any) => {
  const handleChange = (e: any, type: string | null) => {
    const name = e.target.name
    const value = isNaN(parseFloat(e.target.value))
      ? e.target.value
      : parseFloat(e.target.value)

    if (type === null) {
      updateFunction({
        [name]: value
      })
    } else {
      let label = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
      updateFunction({
        [type]: label,
        [name]: value
      })
    }
  }

  return {
    handleChange
  }
}
