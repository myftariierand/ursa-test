import Select from 'react-select'
import AsyncSelect from 'react-select/async'

const Dropdown = ({ options, selectedOption, onChange, placeholder }: any) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: 0,
      boxShadow: 'unset',
      borderRadius: 0,
      '&:hover': {
        border: 0
      }
    }),

    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected && '#000',
      backgroundColor: state.isSelected ? '#deeff1' : '#fff',

      '&:hover': {
        backgroundColor: '#deeff1'
      }
    }),

    valueContainer: (provided: any) => ({
      ...provided,
      paddingLeft: 0
    }),

    indicatorSeparator: () => ({
      display: 'none'
    })
  }

  return (
    <AsyncSelect
      styles={customStyles}
      placeholder={placeholder}
      defaultValue={
        selectedOption.label === '' || selectedOption.label === 0
          ? null
          : selectedOption
      }
      onChange={onChange}
      options={options}
    />
  )
}

export default Dropdown
