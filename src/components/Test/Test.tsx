import { useEffect, useState } from 'react'
import { useStateMachine } from 'little-state-machine'

import styles from './Test.module.scss'

const Test = ({ data }: any) => {
  const [compoState, setCompState] = useState<any>()
  const flattenObj = (ob: any) => {
    // The object which contains the
    // final result
    let result: any = {}

    // loop through the object "ob"
    for (const i in ob) {
      // We check the type of the i using
      // typeof() function and recursively
      // call the function again
      if (typeof ob[i] === 'object' && !Array.isArray(ob[i])) {
        const temp = flattenObj(ob[i])
        for (const j in temp) {
          // Store temp in result
          result[i + '-' + j] = temp[j]
        }
      }

      // Else store ob[i] in result directly
      else {
        result[i] = ob[i]
      }
    }
    return result
  }

  const { state } = useStateMachine()

  useEffect(() => {
    const flattend = flattenObj(data)

    setCompState({ ...flattend, totalRValue: state.totalRValue })
    // eslint-disable-next-line
  }, [data, state.totalRValue])

  return (
    <div className={styles.test}>
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {compoState && (
            <>
              {Object.keys(compoState).map((key, i) => (
                <tr key={i}>
                  <td
                    style={{
                      border: '1px solid white',
                      padding: '1px 20px 1px 5px'
                    }}
                  >
                    {i + 1}
                  </td>
                  <td
                    style={{
                      border: '1px solid white',
                      padding: '1px 20px 1px 5px'
                    }}
                  >
                    {key}
                  </td>
                  <td
                    style={{
                      border: '1px solid white',
                      padding: '1px 20px 1px 5px',
                      fontWeight: 'bold'
                    }}
                  >
                    {compoState[key]}
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Test
