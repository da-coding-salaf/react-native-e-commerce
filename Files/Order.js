import { Box, Button, Heading, Image, Input, VStack, Pressable, Text, FormControl, ScrollView, HStack } from "native-base"

import Colors from "./color.js"
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 


export default function Order(){
return(
   <Box flex={1}  pt="4" bg={Colors.white} >
            <VStack space={2}>
            <Box bg={Colors.subGreen} pt="3" pb="3">
                <HStack justifyContent={"space-around"} alignItems="center">
                    <Text color={Colors.blue}>8462387486234</Text> 
                    <Heading size={"sm"}>Paid</Heading>
                    <Text fontStyle={'italic'}>Dec 12 2021</Text> 
                    <Button bg={Colors.main} rounded={100} width="70" p="2"> $456</Button>
                </HStack>
            </Box>

            <Box bg={Colors.subGreen} pt="3" pb="3">
                <HStack justifyContent={"space-around"} alignItems="center">
                    <Text color={Colors.blue}>8462387486234</Text> 
                    <Heading size={"sm"}>Unpaid</Heading>
                    <Text fontStyle={'italic'}>Jan 12 2022</Text> 
                    <Button bg={Colors.red} rounded={100} width="70" p="2"> $456</Button>
                </HStack>
            </Box>
            </VStack>
   </Box>
)
} 