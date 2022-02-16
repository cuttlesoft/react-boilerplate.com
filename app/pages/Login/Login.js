/* @flow */
import React, { useContext, useEffect, useState, useRef } from 'react'
import { isEmail } from 'validator'
import PropTypes from 'prop-types'

// Components
import { Box } from 'components/Box'
// import { Button } from 'components/Button'
// import { Form, FormField } from 'components/Form'
// import { FormContainer } from 'components/FormContainer'
// import { Heading } from 'components/Heading'
// import { Message } from 'components/Message'
// import { Link } from 'components/Link'
import { LogoHeader } from 'components/LogoHeader'
import { PasswordInput } from 'components/PasswordInput'
import { TextInput } from 'components/TextInput'
import { ResponsiveLine } from '@nivo/line'
import { usePapaParse } from 'react-papaparse'
import { Group } from '@vx/group'
import { ViolinPlot, BoxPlot } from '@vx/stats'
import { LinearGradient } from '@vx/gradient'
import { scaleBand, scaleLinear } from '@vx/scale'
// import genStats, { Stats } from '@vx/mock-data/lib/generators/genStats'
import { withTooltip, Tooltip, defaultStyles as defaultTooltipStyles } from '@vx/tooltip'
// import { WithTooltipProvidedProps } from '@vx/tooltip/lib/enhancers/withTooltip'
import { PatternLines } from '@vx/pattern'
import { ResponsiveBar } from '@nivo/bar'
// import { AxisBottom, AxisLeft } from '@vx/axis'
// import { extract } from 'extract-zip'
// import unzipper from 'unzipper'

// Utils and messages
// import useFlashMessage from '../../hooks/FlashMessage'
// import { login } from '../../services/user.service'
// import { UserStoreContext } from '../../stores/UserStore'
const barQuantSimp = require('./pastedText.json')
/**
 *
 * Login
 *
 */

const data = [
  {
    id: 'Quality Score Plot',
    color: 'h,"y":l(165, 70%, 50%)',
    data: [
      { x: 1, y: 30.174591414596197 },
      { x: 2, y: 30.326970529491447 },
      { x: 3, y: 30.362590330184215 },
      { x: 4, y: 30.61275170470742 },
      { x: 5, y: 30.4380340442084 },
      { x: 6, y: 33.187931294932454 },
      { x: 7, y: 33.21350772224785 },
      { x: 8, y: 33.079151373180096 },
      { x: 9, y: 33.1693591888251 },
      { x: 10, y: 33.05284662797814 },
      { x: 11, y: 33.029385052174916 },
      { x: 12, y: 32.932978469645306 },
      { x: 13, y: 34.8113161926345 },
      { x: 14, y: 34.731927371693686 },
      { x: 15, y: 34.76432650602522 },
      { x: 16, y: 34.64194909405382 },
      { x: 17, y: 34.60281999846768 },
      { x: 18, y: 34.61214839197771 },
      { x: 19, y: 34.63149038096174 },
      { x: 20, y: 34.64689160564006 },
      { x: 21, y: 34.66257122269622 },
      { x: 22, y: 34.66148882692741 },
      { x: 23, y: 35.059609003721306 },
      { x: 24, y: 35.02759450064162 },
      { x: 25, y: 34.955127956581336 },
      { x: 26, y: 34.9357385090638 },
      { x: 27, y: 34.97037269217372 },
      { x: 28, y: 34.96057467631264 },
      { x: 29, y: 34.95147597590099 },
      { x: 30, y: 34.88748698379927 },
      { x: 31, y: 34.93926858645223 },
      { x: 32, y: 34.914756098809285 },
      { x: 33, y: 34.877868565917886 },
      { x: 34, y: 34.87172066961819 },
      { x: 35, y: 34.79717727189118 },
      { x: 36, y: 35.40672405479059 },
      { x: 37, y: 35.35930989927111 },
      { x: 38, y: 35.32470363849861 },
      { x: 39, y: 35.287838327835146 },
      { x: 40, y: 34.94295135681058 },
    ],
  },
]

const baseQualityPlotChart = theData => (
  <ResponsiveLine
    data={theData}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 0,
      max: 50,
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Read Position',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'QC score',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
)
const canvasBaseQualityPlotChart = theData => (
  <ResponsiveLine
    data={theData}
    margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
    xScale={{ type: 'linear' }}
    yScale={{ type: 'linear', stacked: true, min: 0, max: 100 }}
    yFormat=" >-.2f"
    curve="monotoneX"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickValues: [0, 5, 10, 15, 20, 30, 40, 50],
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      format: '.2f',
      legend: 'Position in Read',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      tickValues: [0, 10, 20, 30, 40, 50],
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      format: '.2s',
      legend: 'QC score',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    enableGridX={false}
    colors={{ scheme: 'spectral' }}
    lineWidth={1}
    pointSize={4}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={1}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh
    gridXValues={[0, 5, 10, 15, 20, 30, 40, 50]}
    gridYValues={[0, 10, 20, 30, 40, 50]}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 140,
        translateY: 0,
        itemsSpacing: 2,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 12,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
)

const sequenceTraceData = [
  {
    id: 'G',
    color: 'h,"y":black',
    data: [
      { x: 1, y: 41.41259552012242 },
      { x: 2, y: 20.7743512642608 },
      { x: 3, y: 19.562886925684722 },
      { x: 4, y: 15.972396344365396 },
      { x: 5, y: 18.469631153318844 },
      { x: 6, y: 39.173918295424905 },
      { x: 7, y: 34.33827961119852 },
      { x: 8, y: 30.127525217880024 },
      { x: 9, y: 26.753929062875415 },
      { x: 10, y: 18.63114291093956 },
      { x: 11, y: 41.05396435513411 },
      { x: 12, y: 25.24908796792599 },
      { x: 13, y: 34.35280336913337 },
      { x: 14, y: 24.945429463264354 },
      { x: 15, y: 29.036161791824878 },
      { x: 16, y: 28.479622741839496 },
      { x: 17, y: 27.21184533096664 },
      { x: 18, y: 27.04834660971966 },
      { x: 19, y: 27.48180430174471 },
      { x: 20, y: 27.653723964074434 },
      { x: 21, y: 27.836808469637457 },
      { x: 22, y: 27.82089699107475 },
      { x: 23, y: 28.041087253880647 },
      { x: 24, y: 28.02590117473705 },
      { x: 25, y: 28.36411076912208 },
      { x: 26, y: 27.68731311108987 },
      { x: 27, y: 27.50074353440459 },
      { x: 28, y: 27.3537870738239 },
      { x: 29, y: 27.50098007769343 },
      { x: 30, y: 27.674571312597635 },
      { x: 31, y: 28.336419434775078 },
      { x: 32, y: 27.767539794475972 },
      { x: 33, y: 27.757293210501643 },
      { x: 34, y: 27.905346757306415 },
      { x: 35, y: 27.725623948665014 },
      { x: 36, y: 27.681094989317423 },
      { x: 37, y: 27.73615112959755 },
      { x: 38, y: 28.131653692765784 },
      { x: 39, y: 30.241331091775315 },
      { x: 40, y: 40.88650284461055 },
    ],
  },
  {
    id: 'A',
    color: 'h,"y":green',
    data: [
      { x: 1, y: 17.03017062340511 },
      { x: 2, y: 15.933303623496256 },
      { x: 3, y: 17.434643877770828 },
      { x: 4, y: 14.161499772760747 },
      { x: 5, y: 31.945865018306876 },
      { x: 6, y: 30.301542230704136 },
      { x: 7, y: 26.406888519040315 },
      { x: 8, y: 29.62490226819783 },
      { x: 9, y: 12.998668734370403 },
      { x: 10, y: 26.323041807922433 },
      { x: 11, y: 17.725592123045402 },
      { x: 12, y: 21.510489748686947 },
      { x: 13, y: 16.850476571648805 },
      { x: 14, y: 17.688833295959494 },
      { x: 15, y: 23.958113545194117 },
      { x: 16, y: 23.05659976276285 },
      { x: 17, y: 22.72737881335378 },
      { x: 18, y: 22.64253862042277 },
      { x: 19, y: 22.162150739891636 },
      { x: 20, y: 22.700349800215537 },
      { x: 21, y: 22.10536458101718 },
      { x: 22, y: 22.128151584508874 },
      { x: 23, y: 22.32000396131161 },
      { x: 24, y: 22.23592070690489 },
      { x: 25, y: 22.061919463633362 },
      { x: 26, y: 22.041513662582666 },
      { x: 27, y: 22.05791399727565 },
      { x: 28, y: 22.140120674924233 },
      { x: 29, y: 22.24680169819158 },
      { x: 30, y: 22.234091438804516 },
      { x: 31, y: 22.081237165555386 },
      { x: 32, y: 22.295473087088677 },
      { x: 33, y: 22.138743404295326 },
      { x: 34, y: 21.90403743236614 },
      { x: 35, y: 22.014066534525153 },
      { x: 36, y: 22.25081137469751 },
      { x: 37, y: 22.16568385010462 },
      { x: 38, y: 22.947349569147097 },
      { x: 39, y: 24.96417101763548 },
      { x: 40, y: 35.7999208271827 },
    ],
  },
  {
    id: 'T',
    color: 'h,"y":red',
    data: [
      { x: 1, y: 12.641314903141831 },
      { x: 2, y: 31.121622043563708 },
      { x: 3, y: 26.169651369885266 },
      { x: 4, y: 30.26186603638919 },
      { x: 5, y: 30.798551219664503 },
      { x: 6, y: 13.65998069175981 },
      { x: 7, y: 17.29752761800593 },
      { x: 8, y: 16.76535252677118 },
      { x: 9, y: 17.376107298558946 },
      { x: 10, y: 29.45787116717082 },
      { x: 11, y: 17.754119243679643 },
      { x: 12, y: 23.74426264252916 },
      { x: 13, y: 19.701343597419722 },
      { x: 14, y: 21.2963234549702 },
      { x: 15, y: 18.43378696028312 },
      { x: 16, y: 20.70669988365224 },
      { x: 17, y: 22.310132221390642 },
      { x: 18, y: 22.319026249051067 },
      { x: 19, y: 22.577158055387084 },
      { x: 20, y: 22.35464966835054 },
      { x: 21, y: 21.812334754800805 },
      { x: 22, y: 21.887129742732363 },
      { x: 23, y: 21.613338770675067 },
      { x: 24, y: 21.650838766732676 },
      { x: 25, y: 21.6561688755079 },
      { x: 26, y: 21.854628694845594 },
      { x: 27, y: 21.98690370196555 },
      { x: 28, y: 22.200628448209795 },
      { x: 29, y: 22.193595227754916 },
      { x: 30, y: 21.92871405291063 },
      { x: 31, y: 21.61829041018814 },
      { x: 32, y: 21.7394677962461 },
      { x: 33, y: 21.929144638921645 },
      { x: 34, y: 22.195803249076114 },
      { x: 35, y: 22.013782336593295 },
      { x: 36, y: 21.77098491501778 },
      { x: 37, y: 22.115806095137998 },
      { x: 38, y: 22.448634104621092 },
      { x: 39, y: 21.990103437254998 },
      { x: 40, y: 23.31357632820675 },
    ],
  },
  {
    id: 'C',
    color: 'h,"y":blue',
    data: [
      { x: 1, y: 28.91591895333064 },
      { x: 2, y: 32.170723068679244 },
      { x: 3, y: 36.83281782665919 },
      { x: 4, y: 39.60423784648467 },
      { x: 5, y: 18.785952608709778 },
      { x: 6, y: 16.864558782111146 },
      { x: 7, y: 21.95730425175523 },
      { x: 8, y: 23.48221998715097 },
      { x: 9, y: 42.87129490419524 },
      { x: 10, y: 25.587944113967186 },
      { x: 11, y: 23.466324278140846 },
      { x: 12, y: 29.4961596408579 },
      { x: 13, y: 29.0953764617981 },
      { x: 14, y: 36.069413785805956 },
      { x: 15, y: 28.571937702697888 },
      { x: 16, y: 27.757077611745416 },
      { x: 17, y: 27.750643634288934 },
      { x: 18, y: 27.990088520806506 },
      { x: 19, y: 27.77888690297657 },
      { x: 20, y: 27.291276567359485 },
      { x: 21, y: 28.245492194544553 },
      { x: 22, y: 28.16382168168401 },
      { x: 23, y: 28.025570014132672 },
      { x: 24, y: 28.087339351625385 },
      { x: 25, y: 27.91780089173666 },
      { x: 26, y: 28.416544531481865 },
      { x: 27, y: 28.454438766354208 },
      { x: 28, y: 28.305463803042073 },
      { x: 29, y: 28.05862299636007 },
      { x: 30, y: 28.162623195687214 },
      { x: 31, y: 27.96405298948139 },
      { x: 32, y: 28.197519322189258 },
      { x: 33, y: 28.17481874628139 },
      { x: 34, y: 27.994812561251337 },
      { x: 35, y: 28.24652718021654 },
      { x: 36, y: 28.29710872096729 },
      { x: 37, y: 27.98235892515983 },
      { x: 38, y: 26.47236263346603 },
      { x: 39, y: 22.804394453334208 },
      { x: 40, y: 0.0 },
    ],
  },
]

const sequenceTracePlot = theData => (
  <ResponsiveLine
    data={theData}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 0,
      max: 50,
      stacked: false,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Read Position',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '% Base',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
)

const canvasSequenceTracePlot = theData => (
  <ResponsiveLine
    data={theData}
    margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
    xScale={{ type: 'linear' }}
    yScale={{ type: 'linear', stacked: false, min: 0, max: 100 }}
    yFormat=" >-.2f"
    curve="monotoneX"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickValues: [0, 5, 10, 15, 20, 30, 40, 50],
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      format: '.2f',
      legend: 'Position in Read',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      tickValues: [0, 10, 20, 30, 40, 50],
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      format: '.2s',
      legend: '% Base',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    enableGridX={false}
    colors={{ scheme: 'spectral' }}
    lineWidth={1}
    pointSize={4}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={1}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh
    gridXValues={[0, 5, 10, 15, 20, 30, 40, 50]}
    gridYValues={[0, 10, 20, 30, 40, 50]}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 140,
        translateY: 0,
        itemsSpacing: 2,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 12,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
)
const { readString } = usePapaParse()
const multiplexCSV = readString(
  `"num","x","y"
"1",0,0
"2",79058,39282.9526281761
"3",158115,52959.9538196131
"4",237173,59810.3269488185
"5",316231,63698.9015012219
"6",395288,66042.5291920137
"7",474346,67500.80471842
"8",553404,68422.8008815583
"9",632461,69008.6743319412
"10",711519,69379.5466657265
"11",790577,69611.485783426
"12",869635,69753.5396508326
"13",948692,69837.8678786138
"14",1027750,69885.746980662
"15",1106808,69911.2604256037
"16",1185865,69923.6554519812
"17",1264923,69928.8809944771
"18",1343981,69930.6170000731
"19",1423038,69930.9780257283
"20",1502096,69931`,
  { header: true },
)

const largeMultipleCSV = readString(
  `"num","x","y"
"1",0,0
"2",72043,37937.8271556269
"3",144087,53456.1141618253
"4",216130,62717.7730600405
"5",288173,69015.4160494512
"6",360216,73571.5464604522
"7",432260,76981.1796264283
"8",504303,79581.8764206863
"9",576346,81585.5183903417
"10",648389,83134.8288167055
"11",720433,84331.2881047806
"12",792476,85250.0847102693
"13",864519,85948.9079887763
"14",936562,86473.2100860821
"15",1008606,86859.6559612476
"16",1080649,87138.3943635638
"17",1152692,87334.6725737734
"18",1224735,87469.9398175639
"19",1296779,87562.6760699035
"20",1368822,87629`,
  { header: true },
)

const csvSatData = multiplexCSV.data.map(({ num, ...item }) => item)
const largeCsvSatData = largeMultipleCSV.data.map(({ num, ...item }) => item)
const sequenceSatData = [{ id: 'saturation', color: 'h,"y":blue', data: csvSatData }]
const largeSequenceData = [{ id: 'saturation', color: 'h,"y":blue', data: largeCsvSatData }]
const sequenceSatChart = theData => (
  <ResponsiveLine
    data={theData}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Number of reads',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Unique Peaks',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
)
const canvasSequenceSatChart = theData => (
  <ResponsiveLine
    data={theData}
    margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
    xScale={{ type: 'linear' }}
    yScale={{ type: 'linear' }}
    yFormat=" >-.2f"
    curve="monotoneX"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickValues: theData[0].data.map(x => x.x),
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      format: '.2f',
      legend: 'Number of Read',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      tickValues: [theData[0].data.map(x => x.y)],
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      format: '.2s',
      legend: 'Unique Peaks',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    enableGridX={false}
    colors={{ scheme: 'spectral' }}
    lineWidth={1}
    pointSize={4}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={1}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh
    gridXValues={theData[0].data.map(x => x.x)}
    gridYValues={theData[0].data.map(x => x.y)}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 140,
        translateY: 0,
        itemsSpacing: 2,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 12,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
)

const BQSChart = theData => (
  <ResponsiveLine
    data={theData}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'log', base: 10 }}
    yScale={{
      type: 'log',
      base: 10,
      min: '100',
      max: '10000',
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Barcodes in Rank Descending Order',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'right',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Unique Fragments',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
)
const canvasBQSChart = theData => (
  <ResponsiveLine
    data={theData}
    margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
    xScale={{ type: 'log' }}
    yScale={{ type: 'log' }}
    yFormat=" >-.2f"
    // curve="monotoneX"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickValues: [0, 500000, 1000000000],
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      format: '.2f',
      legend: 'Barcodes in Rank Descending Order',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      tickValues: [5000, 2500, 0],
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      format: '.2s',
      legend: 'Unique Peaks',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    enableGridX={false}
    colors={{ scheme: 'spectral' }}
    lineWidth={1}
    pointSize={4}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={1}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh
    gridXValues={theData[0].data.map(x => x.x)}
    gridYValues={theData[0].data.map(x => x.y)}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 140,
        translateY: 0,
        itemsSpacing: 2,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 12,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
)

const resultData = barQuantSimp.results
const sortedResultData = resultData.sort((a, b) => (a.y < b.y && 1) || -1)
const bQcDataIndexed = sortedResultData.map((x, index) => ({ x: index, y: x.y }))
const bQcData = [{ id: 'line', color: 'h,"y":blue', data: bQcDataIndexed }]
const exampleData = [
  // { ranks: [0, 1], uniqueFragCount: 1000 },
  { ranks: [1, 1], uniqueFragCount: 3890 },
  { ranks: [0, 24], uniqueFragCount: 3000 },
  { ranks: [134, 257], uniqueFragCount: 2000 },
  { ranks: [257, 800], uniqueFragCount: 1500 },
  { ranks: [800, 1200], uniqueFragCount: 100 },
]
const cutOff = 1500

const qcStats = require('./convertcsv.json')
// const ddata = genStats(5)
const uniqFrag = qcStats.map(x => ({
  value: x.uniqueNuclearFrags,
  count: qcStats.filter(y => y.uniqueNuclearFrags === x.uniqueNuclearFrags).length,
}))

const aboveKneeUniquFrag = exampleData.map(x => {
  if (x.uniqueFragCount >= cutOff) {
    return { x: x.ranks[1], y: x.uniqueFragCount }
  }
  return { x: null, y: null }
})
const belowKneeUniquFrag = exampleData.map(x => {
  if (x.uniqueFragCount > cutOff) {
    return { x: null, y: null }
  }
  return { x: x.ranks[1], y: x.uniqueFragCount }
})

const modUniquFrag = [
  { id: 'aboveKnee', color: 'h,"y":blue', data: aboveKneeUniquFrag },
  { id: 'belowKnee', color: 'h,"y":red', data: belowKneeUniquFrag },
]
// eslint-disable-next-line prefer-spread
const maxFrag = Math.max.apply(
  Math,
  uniqFrag.map(x => x.value),
)

// eslint-disable-next-line prefer-spread
const minFrag = Math.min.apply(
  Math,
  uniqFrag.map(x => x.value),
)

const sortFrag = uniqFrag.sort((a, b) => (a.value < b.value && 1) || -1)
const mid = Math.round(sortFrag.length / 2)
const firstQuart = Math.round(sortFrag.length / 4)
const thirdQuart = firstQuart * 3
const fQFrag = sortFrag[firstQuart].value
const tQFrag = sortFrag[thirdQuart].value
const medianFrag = sortFrag[mid].value

console.log(mid)

const ddata = [
  {
    binData: uniqFrag,
    boxPlot: {
      firstQuartile: tQFrag,
      max: maxFrag,
      median: medianFrag,
      min: minFrag - 200,
      thirdQuartile: fQFrag,
    },
  },
]
console.log(ddata)
// accessors
const x = d => d.boxPlot.x
const min = d => d.boxPlot.min
const max = d => d.boxPlot.max
const median = d => d.boxPlot.median
// const firstQuartile = d => d.boxPlot.firstQuartile
// const thirdQuartile = d => d.boxPlot.thirdQuartile
const outliers = d => d.boxPlot.outliers

// const TooltipData = {
//   name,
//   min,
//   median,
//   max,
//   firstQuartile,
//   thirdQuartile,
// }

// const StatsPlotProps = {
//   width,
//   height,
// }
const Violin = withTooltip(
  ({
    width,
    height,
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    showTooltip,
    hideTooltip,
  }) => {
    // bounds
    const xMax = width
    const yMax = height - 120

    // scales
    const xScale = scaleBand({
      range: [0, xMax],
      round: true,
      domain: ddata.map(x),
      padding: 0.4,
    })
    const values = ddata.reduce((allValues, { boxPlot }) => {
      allValues.push(boxPlot.min, boxPlot.max)
      return allValues
    }, [])
    const minYValue = Math.min(...values)
    const maxYValue = Math.max(...values)

    const yScale = scaleLinear({
      range: [yMax, 0],
      round: true,
      domain: [minYValue, maxYValue],
    })

    const boxWidth = xScale.bandwidth()
    const constrainedWidth = Math.min(40, boxWidth)

    return width < 10 ? null : (
      <div style={{ position: 'relative' }}>
        <svg width={width} height={height}>
          <LinearGradient id="statsplot" to="#8b6ce7" from="#87f2d4" />
          <rect x={0} y={0} width={width} height={height} fill="url(#statsplot)" rx={14} />
          <PatternLines
            id="hViolinLines"
            height={3}
            width={3}
            stroke="#ced4da"
            strokeWidth={1}
            // fill="rgba(0,0,0,0.3)"
            orientation={['horizontal']}
          />
          <Group top={40}>
            {ddata.map((d, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <g key={i}>
                <ViolinPlot
                  data={d.binData}
                  stroke="#dee2e6"
                  left={xScale(x(d))}
                  width={constrainedWidth}
                  valueScale={yScale}
                  fill="url(#hViolinLines)"
                />
                <BoxPlot
                  min={min(d)}
                  max={max(d)}
                  left={xScale(x(d)) + 0.3 * constrainedWidth}
                  median={median(d)}
                  boxWidth={constrainedWidth * 0.4}
                  fill="#FFFFFF"
                  fillOpacity={0.3}
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  valueScale={yScale}
                  outliers={outliers(d)}
                  minProps={{
                    onMouseOver: () => {
                      showTooltip({
                        tooltipTop: yScale(min(d)) + 40,
                        tooltipLeft: xScale(x(d)) + constrainedWidth + 5,
                        tooltipData: {
                          min: min(d),
                          name: x(d),
                        },
                      })
                    },
                    onMouseLeave: () => {
                      hideTooltip()
                    },
                  }}
                  maxProps={{
                    onMouseOver: () => {
                      showTooltip({
                        tooltipTop: yScale(max(d)) + 40,
                        tooltipLeft: xScale(x(d)) + constrainedWidth + 5,
                        tooltipData: {
                          max: max(d),
                          name: x(d),
                        },
                      })
                    },
                    onMouseLeave: () => {
                      hideTooltip()
                    },
                  }}
                  boxProps={{
                    onMouseOver: () => {
                      showTooltip({
                        tooltipTop: yScale(median(d)) + 40,
                        tooltipLeft: xScale(x(d)) + constrainedWidth + 5,
                        tooltipData: {
                          ...d.boxPlot,
                          name: x(d),
                        },
                      })
                    },
                    onMouseLeave: () => {
                      hideTooltip()
                    },
                  }}
                  medianProps={{
                    style: {
                      stroke: 'white',
                    },
                    onMouseOver: () => {
                      showTooltip({
                        tooltipTop: yScale(median(d)) + 40,
                        tooltipLeft: xScale(x(d)) + constrainedWidth + 5,
                        tooltipData: {
                          median: median(d),
                          name: x(d),
                        },
                      })
                    },
                    onMouseLeave: () => {
                      hideTooltip()
                    },
                  }}
                />
              </g>
            ))}
          </Group>
        </svg>

        {tooltipOpen && tooltipData && (
          <Tooltip
            top={tooltipTop}
            left={tooltipLeft}
            style={{ ...defaultTooltipStyles, backgroundColor: '#283238', color: 'white' }}
          >
            <div>
              <strong>{tooltipData.name}</strong>
            </div>
            <div style={{ marginTop: '5px', fontSize: '12px' }}>
              {tooltipData.max && <div>max: {tooltipData.max}</div>}
              {tooltipData.thirdQuartile && <div>third quartile: {tooltipData.thirdQuartile}</div>}
              {tooltipData.median && <div>median: {tooltipData.median}</div>}
              {tooltipData.firstQuartile && <div>first quartile: {tooltipData.firstQuartile}</div>}
              {tooltipData.min && <div>min: {tooltipData.min}</div>}
            </div>
          </Tooltip>
        )}
      </div>
    )
  },
)

const alignmentDistData = require('./alignment.json')

alignmentDistData.forEach(s => {
  // eslint-disable-next-line no-param-reassign
  s.readsAlignedColor = 'hsl(175, 70%, 50%)'
  // eslint-disable-next-line no-param-reassign
  s.readsUnalignedColor = 'hsl(132, 70%, 50%)'
})
const alignmentBar = theData => (
  <ResponsiveBar
    data={theData}
    indexBy="contig"
    keys={['Reads Aligned', 'Reads Unaligned']}
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Contig',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Count',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
  />
)

const Login = () => {
  /**
   * Check if the user has been redirected to this page with a URL parameter
   *
   * - `confirmed` indicates that a user has been sent to this page from `ConfirmAccount`
   * - `reset` indicates that a user has been sent to this page from `ResetPassword`
   * - `created` indicates that a user has been sent to this page from an email confirmation link
   */
  useEffect(() => {}, [])

  return (
    <>
      <LogoHeader />
      <Box height="100vh">{baseQualityPlotChart(data)}</Box>
      <Box height="100vh">{canvasBaseQualityPlotChart(data)}</Box>
      <Box height="100vh">{sequenceTracePlot(sequenceTraceData)}</Box>
      <Box height="100vh">{canvasSequenceTracePlot(sequenceTraceData)}</Box>
      <Box height="100vh">{sequenceSatChart(sequenceSatData)}</Box>
      <Box height="100vh">{canvasSequenceSatChart(sequenceSatData)}</Box>
      <Box height="100vh">{sequenceSatChart(largeSequenceData)}</Box>
      <Box height="100vh">{canvasSequenceSatChart(largeSequenceData)}</Box>
      <Box height="100vh">{BQSChart(modUniquFrag)}</Box>
      <Box height="100vh">{canvasBQSChart(modUniquFrag)}</Box>
      <Box height="100vh">{Violin({ height: 250, width: 100 })}</Box>
      {/* <Box height="100vh">{alignmentBar(alignmentDistData)}</Box> */}
    </>
  )
}

Login.propTypes = {}

export default Login
