import { Box, Button, Heading, Image, Input, VStack, Pressable, Text } from "native-base"

import Colors from "./color.js"
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function Register(){
return(
   <Box flex={1} p="3" bg={Colors.main} safeAreaTop>
        <VStack alignItems="center" mt="10" >
        <Image 
            alt="logo"
            style={{ width: 140, height: 140, }}
            borderColor="black"
            resizeMode="contain"
                source={require('../assets/bigger_logo.png')}
            />
            <Button 
            rounded={50} 
            w="70%" 
            mt="10" 
            p="3" 
            bg={Colors.black} 
            fontSize="20" 
            _text={{
                fontSize:18
            }}
            _pressed={{
                bg:Colors.black,
                _text:{
                    fontWeight:"bold"
                }
            }}
            >
            Register
            </Button>

            <Button 
            rounded={50} 
            w="70%" 
            mt="6" 
            p="3" 
            bg={Colors.white} 
            fontSize="20" 
            _text={{
                fontSize:18,
                color:Colors.black
            }}
            _pressed={{
                bg:Colors.white,
                _text:{
                    fontWeight:"bold"
                }
            }}
            >
            Login
            </Button>
        </VStack>
    </Box>
)
} 