import * as React from 'react';
import {View, Text, Button, SafeAreaView, ScrollView, TextInput,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Component} from 'react';

const styles = StyleSheet.create({
      center: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
             }});

const Stack = createStackNavigator();

 class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state={size:0,price:0,installation:0,flooring:0,installationCost:0,total:0,tax:0};
    };
    calculation=()=>
    {
        const {size, price, installation}=this.state;

        this.setState({flooring : size*price,installationCost : size*installation,total :(size*price)+(size*installation),tax:((size*price)+(size*installation))*0.13});
    }
    render() {
    return (
        <SafeAreaView style={{marginTop:10}}>
        <ScrollView>
          <View style={styles.center}>
            <Text>Enter Size of the Room.(Square Meter)</Text>
              <TextInput style={{ borderWidth: 1, borderColor:'grey', margin:10}}
                         keyboardType='numeric' placeholder="Size"
                         onChangeText={size=>this.setState({size})} />
              <Text>Enter Price Per Unit of flooring.</Text>
              <TextInput style={{borderWidth: 1, borderColor:'grey', margin:10}}
                         keyboardType='numeric' placeholder="Price"
                         onChangeText={price=>this.setState({price})}/>
              <Text>Enter Price Per Unit of flooring Installation. </Text>
              <TextInput style={{borderWidth: 1, borderColor:'grey', margin:10}}
                         keyboardType='numeric' placeholder="Price of Installation"
                         onChangeText={installation=>this.setState({installation})} />
              <Button title="Calculate" onPress={this.calculation}/>
              <Text style={{marginTop:10}}>{`Flooring: ${this.state.flooring}`}</Text>
              <Text>{`Installation Cost: ${this.state.installationCost}`}</Text>
              <Text>{`Total: ${this.state.total}`}</Text>
              <Text>{`Tax: ${this.state.tax}`}</Text>
          </View>
        </ScrollView>
        </SafeAreaView>);
    }
}


function AboutScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Vipulkumar Chaudhari</Text>
            <Text>101206944</Text>
        </View>
    );
}
function HomeScreen({ navigation }) {
    return (
        <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:10}}>

            <Button
                title="About"
                onPress={() => navigation.navigate('About')}
            />
        </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:10}}>


            <Button
                title="Calculation"
                onPress={() => navigation.navigate('Calculation')}
            />
        </View>
            </>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="Calculation" component={Calculator}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

