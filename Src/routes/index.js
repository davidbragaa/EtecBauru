
import{createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

import Welcome from '../pages/Welcome';
import SingIn from '../pages/Singin' ;




const stack = createNativeStackNavigator();

    export default function(){
        return(
            <Stack.Navigator>
                <Stack.Screen
                    name= "Welcome"
                    component={Welcome} 
                    options={{headerShown: false}} 
                    
                />

                <Stack.Screen
                    name= "SingIn"
                    component={SingIn} 
                    options={{headerShown: false}}     
                /> 
            </Stack.Navigator>
        )
    }