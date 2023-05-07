
import{createNativeStackNavigator} from '@react-navigation/native-stack'

import welcome from '../pages/Welcome'
import SingIn from '../pages/SingIn'



const Stack = createNativeStackNavigator();

    export default function(){
        return(
            <Stack.Navigator>
                <Stack.Screen
                    name= "Welcome"
                    component={welcome}   
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