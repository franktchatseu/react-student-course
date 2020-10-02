import React from "react";
import "./modal.css"
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Badge,
    Button
} from "shards-react";
import UserDetails from "../teacher/UserDetails";
export default class ModalCustom extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalOpened: false
        }

        this.modalToggle = this.modalToggle.bind(this)
    }

    modalToggle() {
        this.setState({ modalOpened: !this.state.modalOpened })
    }

    render() {
        const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
        const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
        return (
            <Col lg="4" className="cursor">
                <Col  onClick={this.modalToggle}>
                        <Card small className="card-post mb-4">
                            <CardBody>
                                <div
                                    className="card-post__image"
                                    style={{ backgroundImage: `url('${this.props.post.avatar}')` }}
                                >

                                </div>
                            </CardBody>
                            <CardFooter className="border-top d-flex">
                                <div className="card-post__author d-flex">

                                    <div className="d-flex flex-column justify-content-center ml-3">
                                        <span className="card-post__author-name">
                                            {this.props.post.author}
                                        </span>
                                        <small className="text-muted">{this.props.post.phone}</small>
                                    </div>
                                </div>
                                <div className="my-auto ml-auto">
                                    <Button size="sm" theme="white">
                                        <i className="far fa-bookmark mr-1" /> {this.props.post.lastName} {this.props.post.firstName}
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                <div className={containerClass}>
                <UserDetails teacherDetails={this.props.post} />
                </div>

                <div className={coverClass} onClick={this.modalToggle}></div>
            </Col>
        )
    }
}

