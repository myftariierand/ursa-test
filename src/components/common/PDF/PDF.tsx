// @ts-nocheck
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image
} from '@react-pdf/renderer'
import {
  extractLambda,
  threeDigitRound,
  twoDigitRound
} from 'utils/helperFunctions'

const styles = StyleSheet.create({
  page: {
    padding: 32,
    color: '#262F5E'
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 32,
    borderBottom: '1px solid #BDBDBD',
    marginBottom: 24
  },
  logo: {
    width: 76,
    height: 41
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25
  },
  col1: {
    justifyContent: 'center',
    width: 130,
    height: '100%',
    marginRight: 15
  },
  col2: {
    justifyContent: 'center',
    width: 180,
    height: '100%'
  },
  col3: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 15',
    height: '100%',
    width: 80
  },
  col4: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%'
  },
  col5: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%'
  },
  borderRight: {
    borderRight: '1px solid #5c5c5c'
  }
})

const PDF = ({ state }: any) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.logoContainer}>
          <Image alt="logo" style={styles.logo} src="images/logo.png" />
        </View>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <Text style={{ fontSize: '20px' }}>Gevelisolatie</Text>
            <Text style={{ fontSize: '14px' }}>
              {state.projectDetails.projectName}
            </Text>
            <Text style={{ fontSize: '14px', color: '#9094AB' }}>
              {state.projectDetails.projectDate}
            </Text>
          </View>
          <View
            style={{
              padding: '16 28',
              backgroundColor: '#F4F4F4'
            }}
          >
            <Text
              style={{ color: '#9094AB', fontSize: '16px', marginBottom: 10 }}
            >
              U-waarde
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Text
                style={{ fontSize: '36px', marginRight: 8, fontWeight: 600 }}
              >
                1
              </Text>
              <Text style={{ marginBottom: 5 }}>W/(m²•K)</Text>
            </View>
          </View>
        </View>
        {/* Table */}
        <View
          style={{
            marginBottom: 20
          }}
        >
          {/* Header */}
          <View
            style={{
              backgroundColor: '#212121',
              color: '#fff',
              fontSize: 12,
              flexDirection: 'row',
              padding: '0 16',
              height: 50
            }}
          >
            <View style={{ ...styles.col1, ...styles.borderRight }}>
              <Text>Laag</Text>
            </View>
            <View style={{ ...styles.col2, ...styles.borderRight }}>
              <Text>Materiaal</Text>
            </View>
            <View style={{ ...styles.col3, ...styles.borderRight }}>
              <Text>Dikte cm</Text>
            </View>
            <View style={{ ...styles.col4, ...styles.borderRight }}>
              <Text>Lambda W/(m•K)</Text>
            </View>
            <View style={styles.col5}>
              <Text>R-waarde m²•K/W</Text>
            </View>
          </View>
          {/* Step 1 */}
          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              padding: '5 16',
              backgroundColor: '#F4F4F4'
            }}
          >
            <View style={styles.col1}>
              <Text>Buitenmuur</Text>
            </View>
            <View style={styles.col2}>
              <Text>{state.stepOne.material}</Text>
            </View>
            <View style={styles.col3}>
              <Text>
                {twoDigitRound(state.stepOne.materialThickness * 100)}
              </Text>
            </View>
            <View style={styles.col4}>
              <Text>{extractLambda(state.stepOne.materialLambda)}</Text>
            </View>
            <View style={styles.col5}>
              <Text>{threeDigitRound(state.stepOne.materialRValue)}</Text>
            </View>
          </View>

          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              padding: '5 16'
            }}
          >
            <View style={styles.col1}>
              <Text>Buitenmuur</Text>
            </View>
            <View style={styles.col2}>
              <Text>{state.stepOne.airLayerType}</Text>
            </View>
            <View style={styles.col3}>
              <Text>{state.stepOne.airLayerThickness}</Text>
            </View>
            <View style={styles.col4}>
              <Text>{state.stepOne.airLayerRValue}</Text>
            </View>
          </View>

          {/* Step 2 */}
          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              padding: '5 16',
              backgroundColor: '#F4F4F4'
            }}
          >
            <View style={styles.col1}>
              <Text>Isolatie</Text>
            </View>
            <View style={styles.col2}>
              <Text>{state.stepTwo.material}</Text>
            </View>
            <View style={styles.col3}>
              <Text>{state.stepTwo.materialThickness * 100}</Text>
            </View>
            <View style={styles.col4}>
              <Text>{extractLambda(state.stepTwo.materialLambda)}</Text>
            </View>
            <View style={styles.col5}>
              <Text>{threeDigitRound(state.stepTwo.materialRValue)}</Text>
            </View>
          </View>

          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              padding: '5 16'
            }}
          >
            <View style={styles.col1}>
              <Text>Isolatie</Text>
            </View>
            <View style={styles.col2}>
              <Text>{state.stepTwo.fixingMaterial}</Text>
            </View>
            <View style={styles.col3}>
              <Text>{state.stepTwo.fixingQuantity}</Text>
            </View>
            <View style={styles.col4}>
              <Text>{extractLambda(state.stepTwo.fixingDiameter)}</Text>
            </View>
            <View style={styles.col5}>
              <Text>{threeDigitRound(1 / state.stepTwo.fixingUValue)}</Text>
            </View>
          </View>

          {/* Step 3 */}
          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              padding: '5 16',
              backgroundColor: '#F4F4F4'
            }}
          >
            <View style={styles.col1}>
              <Text>2e isolatielaag</Text>
            </View>
            <View style={styles.col2}>
              <Text>{state.stepThree.material}</Text>
            </View>
            <View style={styles.col3}>
              <Text>{state.stepThree.materialThickness * 100}</Text>
            </View>
            <View style={styles.col4}>
              <Text>{extractLambda(state.stepThree.materialLambda)}</Text>
            </View>
            <View style={styles.col5}>
              <Text>{threeDigitRound(state.stepThree.materialRValue)}</Text>
            </View>
          </View>

          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              padding: '5 16'
            }}
          >
            <View style={styles.col1}>
              <Text>2e isolatielaag</Text>
            </View>
            <View style={styles.col2}>
              <Text>{state.stepThree.fixingMaterial}</Text>
            </View>
            <View style={styles.col3}>
              <Text>{state.stepThree.fixingQuantity}</Text>
            </View>
            <View style={styles.col4}>
              <Text>{extractLambda(state.stepThree.fixingDiameter)}</Text>
            </View>
            <View style={styles.col5}>
              <Text>{threeDigitRound(1 / state.stepThree.fixingUValue)}</Text>
            </View>
          </View>

          {/* Step 4 */}
          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              padding: '5 16',
              backgroundColor: '#F4F4F4'
            }}
          >
            <View style={styles.col1}>
              <Text>Binnenmuur</Text>
            </View>
            <View style={styles.col2}>
              <Text>{state.stepFour.material}</Text>
            </View>
            <View style={styles.col3}>
              <Text>
                {twoDigitRound(state.stepFour.materialThickness * 100)}
              </Text>
            </View>
            <View style={styles.col4}>
              <Text>{extractLambda(state.stepFour.materialLambda)}</Text>
            </View>
            <View style={styles.col5}>
              <Text>{threeDigitRound(state.stepFour.materialRValue)}</Text>
            </View>
          </View>

          {/* Step 5 */}
          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              padding: '5 16'
            }}
          >
            <View style={styles.col1}>
              <Text>Afwerking binnenmuur</Text>
            </View>
            <View style={styles.col2}>
              <Text>{state.stepFive.material}</Text>
            </View>
            <View style={styles.col3}>
              <Text>{state.stepFive.materialThickness * 100}</Text>
            </View>
            <View style={styles.col4}>
              <Text>{extractLambda(state.stepFive.materialLambda)}</Text>
            </View>
            <View style={styles.col5}>
              <Text>{threeDigitRound(state.stepFive.materialRValue)}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#F4F4F4',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 17
          }}
        >
          <Text>
            Total Dikte:{' '}
            {state.stepOne.materialThickness * 100 +
              state.stepTwo.materialThickness * 100 +
              state.stepThree.materialThickness * 100 +
              state.stepFour.materialThickness * 100 +
              state.stepFive.materialThickness * 100}
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 32,
            left: 32,
            right: 0,
            width: '100%',
            fontSize: 9,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottom: '1px solid #262F5E',
            paddingBottom: 5
          }}
        >
          <Text>URSA Benelux | https://www.ursa.be</Text>
          <Text>Tel: 056 73 84 84</Text>
        </View>
      </Page>
    </Document>
  )
}

export default PDF
