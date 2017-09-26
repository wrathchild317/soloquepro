/*---------------React------------------*/
import React, { Component } from 'react';
import {View, Text } from 'react-native';
/*--------------Styles & Configs--------*/
import styles from './styles';
import configs from './configs';
/*-------------import carousel---------*/
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCard from '../CarouselCard';

export default class ChampionCarousel extends Component {

    getProps = () => {
        this.freeChampions = this.props.freeChampions;
    }

    renderItem = ({item}, parallaxProps) => ( 
        <CarouselCard 
            champion={item} 
            parallaxProps={parallaxProps}
        />
    )

    render () {
        this.getProps();

        return (
            <View style={styles.container}>
                <Carousel
                  data={this.freeChampions}
                  renderItem={this.renderItem}
                  containerCustomStyle={styles.carousel}
                  slideStyle={styles.slideStyle}
                  {...configs.carouselConfigs}
                />
            </View>
        );
    }
}
