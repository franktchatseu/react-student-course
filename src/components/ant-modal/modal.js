import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import AntTransfert from '../ant-transfert/AntTransfert';

export default class ModalAnt extends React.Component {

  constructor(props){
    super(props)
  }
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="secondary" onClick={this.showModal}>
          Choix de Enfant
        </Button>
        <Modal
          title="Selectionner les Enfants Pour cette reservation"
          visible={this.state.visible}
          onOk={this.handleOk }
          onCancel={this.handleCancel}
        >
          <AntTransfert />

        </Modal>
      </>
    );
  }
}