import { Box, Button, Heading, HStack, Image, Input, VStack,Pressable, Text, StatusBar } from "native-base"
import Colors from "./color.js"
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function HomePage(){
return(
    <Box p="3" bg={Colors.main}>
    <HStack space={3} justifyContent="center" alignItems={"center"}>
    <Input type="text"  variant="filled" _focus={{
        bg:Colors.white
    }} width="80%" borderWidth={0} placeholder="Nike, Shoe, Clothes" bg={Colors.white} />
   <Pressable>
   <Box>
    <Box justifyContent={"center"} 
    alignItems="center" left={1.5} top={-10}
    position={"absolute"} zIndex={1} bg={Colors.red} 
    _text={{color:"white", fontWeight:"bold",fontSize:"12"}} 
    rounded={50} pb="1" w="4" h="4">
        1
    </Box>
    <FontAwesome5 name="shopping-basket" size={25} color={Colors.white} />
   </Box>
   </Pressable>
    </HStack>
    </Box>
)
} 