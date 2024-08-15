import { Document, Image, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'
import './App.css'

const styles = StyleSheet.create({
  page: {
    justifyContent: 'flex-start',
    padding: 30,
    position: 'relative',
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  img: {
    width: 50,
  },
  H_Text: {
    fontSize: 16,
    marginLeft: 7
  },
  H_TextOne: {
    fontSize: 12,
    marginLeft: 7,
    marginTop: 3
  },
  H_TextTwo: {
    fontSize: 12,
    marginTop: 3
  },
  H_TextThree: {
    fontSize: 10,
    marginTop: 40,
  },
  Title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  Title_Text: {
    fontSize: 11,
  },
  Title_TextOne: {
    fontSize: 10,
  },
  S_info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6
  },
  S_Details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6
  },
  Details: {
    marginTop: 10,
    borderStyle: 'solid',
    border: 1,
    padding: 10,
    textAlign: 'left'
  },
  table: {
    marginTop: 10,
    display: 'table',
    width: 'auto',


  },

  tableRow: {
    flexDirection: 'row',
    width: 'auto',
    // paddingHorizontal: 5
  },
  tableRowOne: {
    flexDirection: 'row',
    width: 'auto',
    // paddingHorizontal: 5
  },
  tableCol: {
    width: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 'auto',
    backgroundColor: '#cedded',
    padding: 7,
  },
  tableColOne: {
    width: '15%',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#cedded',
    borderLeftWidth: 0,
    height: 'auto',
    padding: 7,
  },
  tableColTwo: {
    width: '35%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    backgroundColor: '#cedded',
    height: 'auto',
    padding: 7,
  },
  tableColThree: {
    width: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 'auto',
    padding: 7,
  },
  tableColFour: {
    width: '15%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 'auto',
    padding: 7,
  },
  tableColFive: {
    width: '35%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 'auto',
    padding: 7,
  },
  tableText: {
    fontSize: 8,
    textAlign: 'center',
    width: 'auto',
  },
  tableTextOne: {
    fontSize: 6.5,
    textAlign: 'center',
    width: 'auto',
  },

  pageNumber: {
    fontSize: 11,
    marginLeft: 50,
    marginTop: 2
  },


})


const MyApp = () => {
  return (
    <PDFViewer width={1200} height={760}>
      <MyDocument></MyDocument>
    </PDFViewer>
  )
}
const MyDocument = () => {
  return (
    <Document title='Finance-Satement'>
      <Page size="A4" style={styles.page}>
        <View>

          {/* Header */}

          <View style={styles.Header}>
            <View style={styles.img}>
              <Image src="../src/assets/one.jpg"></Image>
            </View>
            <View>
              <Text style={styles.H_Text}>Civil Aviation School and College</Text>
              <Text style={styles.H_TextOne}>Old Airport Road, Tejgaon, Dhaka</Text>
            </View>
          </View>

          {/* Title & Period */}

          <View style={styles.Title}>
            <View>
              <Text style={styles.Title_Text}> Title : Student Ledger</Text>
              <Text style={styles.Title_Text}> Period : 01/06/24   to   08/08/24</Text>
            </View>
            <View>
              <Text style={styles.Title_TextOne}>Print date : Aug 14, 2024</Text>
              <Footer></Footer>
            </View>

          </View>

          {/* Student Info */}

          <View style={styles.S_info}>
            <View><Text style={styles.Title_Text}> Student ID : Ab564654</Text></View>
            <View><Text style={styles.Title_Text}> Roll : 25</Text></View>
            <View><Text style={styles.Title_Text}> Name : DEBOSMITA ROY</Text></View>
          </View>

          {/* Student Details */}

          <View style={styles.Details}>
            <View style={styles.S_Details}>
              <View><Text style={styles.Title_Text}> Branch : General </Text></View>
              <View><Text style={styles.Title_Text}> Version : Bangla </Text></View>
              <View><Text style={styles.Title_Text}> Program : Six    </Text></View>
              <View><Text style={styles.Title_Text}> Subject : Bangla </Text></View>
            </View>
            <View style={styles.S_Details}>
              <View><Text style={styles.Title_Text}> Group : Sicence</Text></View>
              <View><Text style={styles.Title_Text}> Section : A</Text></View>
              <View><Text style={styles.Title_Text}> Shift : Morning</Text></View>
              <View><Text style={styles.Title_Text}> Session : 2024  </Text></View>
            </View>
          </View>

          {/* Table Header */}

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableText}> Sri </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Tran Date </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Tran Type </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Tran Id </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> For </Text>
              </View>
              <View style={styles.tableColTwo}>
                <Text style={styles.tableText}> Particulars </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Debit </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Credit </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Balance </Text>
              </View>
            </View>

            {/* Table Data */}

            {Array.from({ length: 30 }).map((_, i) => (
              <View key={i} wrap={false} pageBreak="avoid" style={styles.tableRowOne}>
                <View style={styles.tableColThree}>
                  <Text style={styles.tableTextOne}> 1 </Text>
                </View>
                <View style={styles.tableColFour}>
                  <Text style={styles.tableTextOne}> 18-01-2024 </Text>
                </View>
                <View style={styles.tableColFour}>
                  <Text style={styles.tableTextOne}>  RECEIVABLE </Text>
                </View>
                <View style={styles.tableColFour}>
                  <Text style={styles.tableTextOne}> 92485 </Text>
                </View>
                <View style={styles.tableColFour}>
                  <Text style={styles.tableTextOne}> Jan-2024 </Text>
                </View>
                <View style={styles.tableColFive}>
                  <Text style={styles.tableTextOne}> Balance Forward upto 31-12-2023 </Text>
                </View>
                <View style={styles.tableColFour}>
                  <Text style={styles.tableTextOne}> 1,500.00 </Text>
                </View>
                <View style={styles.tableColFour}>
                  <Text style={styles.tableTextOne}> 0.00 </Text>
                </View>
                <View style={styles.tableColFour}>
                  <Text style={styles.tableTextOne}> 1,500.00 </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.H_TextTwo}>Current Dues : 4,500.00</Text>
          <Text style={styles.H_TextTwo}>In word : Taka Four Thousand Five Hundred Only</Text>
        </View>
        <View fixed wrap={false} pageBreak="avoid" style={styles.H_TextThree}>
          <Text>This is a computer generated document, signature is not required</Text>
          <Text style={styles.footerText}>Design and developed by : Walton Group</Text>
        </View>
      </Page>
    </Document>
  )
}

const Footer = () => (
  <View style={styles.footer} fixed >
    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => ` ${'page # ' + pageNumber} / ${totalPages}`} >Page# </Text>
  </View>
)

export default MyApp