import React from 'react';

export const NAVBAR_HEIGHT = 49;

export default {
	collapsableHeaderConfigs: {
      style: {
        height: NAVBAR_HEIGHT,
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.2)',
      }
    },
    toolBarConfigs: {
        searchIconColor: 'white',
        xIconColor: 'rgba(211,211,211,0.5)',
        iconSizes: 23,
         textInputProps: {
            autoCapitalize: 'words',
            autoCorrect: false,
            placeholder: 'SEARCH ITEM',
            placeholderTextColor: 'rgba(211,211,211,0.5)',
            underlineColorAndroid: 'transparent',
            style: {
                color: 'white',
                fontSize: 18,
            },
            selectionColor: '#d3d3d3',
         },
    }
}