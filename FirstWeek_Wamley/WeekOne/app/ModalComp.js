import React, { Component } from 'react';
import{
  Modal,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class ModalComp extends Component{
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return(
      <View style={{margin: 22}}>
     <Modal
       animationType={"fade"}
       transparent={false}
       visible={this.state.modalVisible}
       onRequestClose={() => {alert("You Closed the modal.")}}
       >
      <View style={{marginTop: 22}}>
       <View>
         <Text>Congratulations You finsihed the modal</Text>

         <TouchableHighlight onPress={() => {
           this.setModalVisible(!this.state.modalVisible)
         }}>
           <Text>Hide Modal</Text>
         </TouchableHighlight>

       </View>
      </View>
     </Modal>

     <TouchableHighlight onPress={() => {
       this.setModalVisible(true)
     }}>
       <Text>Show Modal</Text>
     </TouchableHighlight>

   </View>
    )
  }

};
