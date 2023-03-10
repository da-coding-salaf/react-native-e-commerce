import { Box, Button, Heading, HStack, Image, Input, 
    VStack,Pressable, Text, StatusBar, Select, CheckIcon,
     ScrollView, Flex, Spacer, Center, FormControl,
     TextArea, 
     Hidden} from "native-base"
import Colors from "./color"
import Products from "./products";
import { SwipeListView } from 'react-native-swipe-list-view';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useState } from "react";
import SwiptItems from "./SwiptItems"

export default function Cart(){
return(
   <Box flex={1} bg={Colors.subGreen}  safeArea>
    <VStack>
    <Box h="8%"  justifyContent="center" w={"full"}>
        <Center><Heading>Carts</Heading></Center>
    </Box>

    <Box h="75%" >
    <SwiptItems />
    </Box>
    <Box h="8%"  p="2" justifyContent={"center"}  >
       <Box w="full" h="full" shadow={2}  bg={Colors.white} flex="1" flexDirection={"row"} alignItems="center"  rounded={50} >
        <Box>
            <Heading size={"md"} ml="4">
                Total
            </Heading>
        </Box>
        <Box w="100" h="full" ml="auto" justifyContent={"center"} bg={Colors.main} rounded={50}>
            <Center><Heading size={"md"} color={Colors.white}>$369</Heading></Center>
        </Box>
        </Box> 
    </Box>
    <Box h="8%"  pl="2" pr="2"   >
       <Box w="full" h="full"    rounded={50} >
       <Button 
            rounded={50} 
            w="full" 
            p="3"
            bg={Colors.black} 
            fontSize="20" 
            _text={{
                fontSize:18
            }}
            _pressed={{
                bg:Colors.black,
                _text:{
                    fontWeight:"bold",
                    color:Colors.white
                }
            }}
            >
            CHECKOUT
            </Button>
        </Box> 
        
    </Box>
    </VStack>     
   </Box>
)
} 