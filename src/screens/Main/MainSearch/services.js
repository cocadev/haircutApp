import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../../../store/common/actions";
import { JOBLISTING } from '../../../common/staticdata';
import {colors} from '../../../common/colors'
import { SERVICE_API_URL } from '../../../utils/config';
import axios from 'axios';

const width = Dimensions.get('window').width;

class Services extends React.Component {

  constructor(){
    super();
    this.state = {
      results:[]
    }
  }

  componentDidMount() {

    axios.get(SERVICE_API_URL + 'stars')
      .then(res => {
        const results = res.data;
        this.setState({ results });
      })
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity style={styles.btn}>
    
        <Image source={{uri:item.hairImg}} resizeMode="cover" style={{width:'100%', flex:1}} />

        <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'center', height:25}}>
            <Text style={{maxWidth:width/2-70, fontWeight:'600', color:colors.GREEN, fontSize:10}} numberOfLines={2}>{item.title}</Text>
        </View>

    </TouchableOpacity>
  );

  _ItemSeparator = () => <View style={styles.separator} />;

  render() {
  
    return (
      <View style={styles.container} >

         <FlatList
          data={this.state.results}
          keyExtractor={(item, i) => String(i)}
          renderItem={this._renderItem}
          numColumns={3}
        />

      </View>
    )
  }
}

export default Services;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:24,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  separator: {
    height: 5,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
  btn:{
    margin:5,
    padding:6,
    width: width/3-13,
    height: width/3-13,
    borderRadius:5,
    elevation:2,
    borderColor:'#bfbfbf'
  }
});
