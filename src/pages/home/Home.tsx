import React, { Component } from 'react';
import styles from './Home.module.scss';
import Helmet from 'react-helmet';
import { Typography, Carousel, Button, Icon } from 'antd';
import moment from 'moment';
import { RouteComponentProps } from 'react-router';
import { State } from '../../interfaces/State';
import { AnyAction } from '@reduxjs/toolkit';
import { connect } from 'react-redux';

const { Title } = Typography;

declare let state: State;

interface HomeProps extends RouteComponentProps, State {
    dispatch(args: AnyAction): void;
}

class Home extends Component<HomeProps> {

    componentDidMount = (): void => {
        // to do
    }

    slider?: Carousel;

    render(): JSX.Element {
        return (
            <>
                <Helmet>
                    <title>A Brief History...</title>
                </Helmet>
                <div className={styles.home}>
                    <div className={styles.content}>
                        <Carousel
                            ref={(c): any => {this.slider = c as Carousel; }}
                            dots={false}
                            fade={true}
                            slidesToShow={1}
                            slidesToScroll={1}
                        >
                            <div className={styles.sliderDiv} id={styles.intro}>
                                <Button type="primary" onClick={(): void => this.slider?.next()}>
                                    Start
                                    <Icon type="arrow-right" />
                                </Button>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </>
        );
    }
}

const mapProps = (state: State): State => {
    return {
        ...state
    };
}; 

export default connect(mapProps)(Home);