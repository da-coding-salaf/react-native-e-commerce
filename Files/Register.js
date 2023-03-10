import { Box, Button, Heading, Image, Input, VStack,Pressable, Text } from "native-base"

import Colors from "./color.js"
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function Register(){
return(
   <Box flex={1} bg={Colors.main} >
    <Image 
    flex={1}
    alt="Logo"
    resizeMode="cover"
    size="lg"
    w="full"    
    source={require("../assets/bck.png")}    
    />
    <Box 
    w="full"
    h="full"
    position="absolute" 
    top="0" 
    px="6" 
    justifyContent="center"    
    >
    <Heading> SIGN UP</Heading> 
    <VStack w="70%" pt="5" space={6}>
    <Input
        InputLeftElement={<FontAwesome name="user" size={20} color={Colors.main} />}
        variant="underlined"
        placeholder="Full Name"
        autoCapitalize="none"
        borderBottomColor={Colors.underline}
        color={Colors.main}
        pl={2}        
        />    

        <Input
        InputLeftElement={<Entypo name="email" size={20} color={Colors.main} />}
        autoCapitalize="none"
        variant="underlined"
        placeholder="Username"
        borderBottomColor={Colors.underline}
        color={Colors.main}
        pl={2}        
        />

        <Input
        InputLeftElement={<FontAwesome name="phone-square" size={20} color={Colors.main} />}
        variant="underlined"
        placeholder="Phone"
        keyboardType="numeric"
        borderBottomColor={Colors.underline}
        color={Colors.main}
        pl={2}        
        />    
    
        <Input
        InputLeftElement={<MaterialIcons name="email" size={20} color={Colors.main} />}
        variant="underlined"
        autoCapitalize="none"
        placeholder="username@gmail.com"
        borderBottomColor={Colors.underline}
        color={Colors.main}
        pl={2}        
        />

        <Input 
        InputLeftElement={<Entypo name="eye" size={20} color={Colors.main} />}
        variant="underlined"
        type="password"
        placeholder="*********"
        borderBottomColor={Colors.underline}
        color={Colors.main}
        pl={2}        
        />
        <Button 
        bg={Colors.main}
        rounded={50} 
        borderColor="white" 
        my={2} 
        borderWidth={1}
        _pressed={{
            bg: Colors.main   
        }}
        w="80%"
        >
        Sign Up
        </Button>
        <Pressable mt={3}>
        <Text color={Colors.deepestGray}>LOGIN</Text>
        </Pressable>
    </VStack>
    </Box>
   </Box>
)
} 