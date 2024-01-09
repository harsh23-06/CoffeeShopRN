import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import colors from '../config/colors';
import SPACING from "../config/SPACING";
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchField from "../components/SearchField";
import Categories from '../components/Categories';
import coffees from '../config/coffees';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get("window")


const HomeScreen = () => {
  const navigation = useNavigation();

  const [activeCategoryId,setActiveCategoryId] = useState(null)
  return (
    <SafeAreaView style={{backgroundColor:colors.dark}}>
      <ScrollView style={{ padding: SPACING, }}>

        <View style={{

          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <TouchableOpacity style={{
            borderRadius: SPACING,
            overflow: "hidden", width: SPACING * 4,
            height: SPACING * 4,
          }}>
            <View
              style={{
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              blurType="light"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            >

              <Icon name="bars" size={SPACING * 2.5} color="white" />

            </View>
          </TouchableOpacity>
          <View style={{
            width: SPACING * 4,
            height: SPACING * 4,
            overflow: 'hidden',
            borderRadius: SPACING
          }}>
            <View style={{
              height: '100%',
              padding: SPACING / 2

            }}>
              <Icon style={{ borderRadius: SPACING * 2 }} name="user" size={SPACING * 2.5} color="white" />

            </View>
          </View>
        </View>
        <View style={{ width: '80%', marginVertical: SPACING * 3 }}>
          <Text style={{
            color: colors.white,
            fontSize: SPACING * 3.5,
            fontWeight: '600'
          }}>Find the best Coffe here</Text>
        </View>
        <SearchField />
        <Categories  onChange={(id) => setActiveCategoryId(id)} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
          {
            coffees.filter(coffee=>{
            if(activeCategoryId===null){
              return true
            }
            return coffee.categoryId === activeCategoryId
            }).map(coffee => <View key={coffee.id} style={{
              width: width / 2 - SPACING * 2,
              marginBottom: SPACING,
              borderRadius: SPACING * 2,
              overflow: 'hidden'
            }}>
              <View
                style={{
                  elevation: 5,
                  shadowColor: 'black',
                  shadowOpacity: 0.2,
                  shadowRadius: 5,
                  borderRadius: SPACING * 3,
                  backgroundColor: colors.secondary, // Add a background color
                  overflow: 'hidden', // Ensure rounded corners clip the content
                  margin: SPACING,
                }}>
                <TouchableOpacity style={{
                  height: 150,
                  width: '100%'
                }}
                onPress={() => navigation.navigate('CoffeeDetailsScreen',{coffee})}
                >
                  <Image source={coffee.image} style={{
                    width: '100%',
                    height: '100%',
                  }} />
                  <View style={{
                    position: 'absolute',
                    right: 0,
                    borderBottomRightRadius: SPACING * 3,
                    borderTopEndRadius: SPACING * 3,
                    overflow: 'hidden',
                  }}>
                    <View style={{
                      flexDirection: 'row',
                      padding: SPACING - 2
                    }}>
                      <Icon style={{ marginLeft: SPACING / 2 }} name='star' color={colors.primary} size={SPACING * 1.7} />
                      <Text style={{
                        color: colors.white,
                        marginLeft: SPACING / 2,
                      }}>{coffee.rating}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', padding: SPACING }}>
                  <Text numberOfLines={2}
                  style={{
                    color: colors.black,
                    fontWeight: '600',
                    fontSize: SPACING * 1.7,
                    marginTop: SPACING,
                    marginBottom:SPACING/2
                  }}>{coffee.name}</Text>
                  <Text numberOfLines={1}
                  style={{ color: colors.gray, 
                  fontSize:SPACING }}>{coffee.included}</Text>
                </View>
                <View style={{
                  marginVertical:SPACING/2,
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center'}}>
                <View style={{ flexDirection: "row",flex: 1, justifyContent: 'flex-start', padding: SPACING }}>
                      <Text
                        style={{
                          color: colors.primary,
                          marginRight: SPACING / 2,
                          fontSize: SPACING * 1.6,
                        }}
                      >
                        $
                      </Text>
                      <Text
                        style={{ color: colors.white, fontSize: SPACING * 1.6 }}
                      >
                        {coffee.price}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.primary,
                        padding: SPACING / 2,
                        borderRadius: SPACING,
                        marginRight:SPACING
                      }}
                    >
                      <Icon
                        name="plus"
                        size={SPACING * 2}
                        color={colors.white}
                      />
                    </TouchableOpacity>
              </View>
                </View>
            </View>)
          }
        </View>
      </ScrollView>

    </SafeAreaView >
  )
}

export default HomeScreen