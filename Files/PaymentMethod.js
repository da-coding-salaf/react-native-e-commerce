import { Box, Button, Heading, Image, Input, VStack, Pressable, Text, FormControl, ScrollView, Center, HStack, Flex } from "native-base"

import Colors from "./color.js"
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

export default function PaymentMethod(){
return(
   <Box flex={1}   bg={Colors.subGreen} safeArea >
    <Box p="3" bg={Colors.main}>
       <Center>
       <Text fontSize={18} fontWeight="bold" color={Colors.white}>PAYMENT METHOD</Text>
       </Center>
    </Box>
       <Box p="3">
       
          <VStack space={4}>

          <Flex rounded={10} justifyContent={"space-between"} p="4" pt="2" pb="2" bg={Colors.white} h="70"  flexDirection="row" alignItems={"center"} >
            <Box>
            <Image alt="paypal" height={30}  w="70" resizeMode="contain" source={require('../assets/products/paypal.png')} />
            </Box>
                <Box>
                <Ionicons name="checkmark-circle" size={24} color={Colors.main} />
                </Box>
            </Flex>

            <Flex rounded={10} justifyContent={"space-between"} p="4" pt="2" pb="2" bg={Colors.white} h="70"  flexDirection="row" alignItems={"center"} >
            <Box>
            <Image alt="paypal" height={30}  w="70" resizeMode="contain" source={require('../assets/products/googlepay.png')} />
            </Box>
                <Box>
                <Ionicons name="checkmark-circle-outline" size={24} color={Colors.main} />
                </Box>
            </Flex>


            <Flex rounded={10} justifyContent={"space-between"} p="4" pt="2" pb="2" bg={Colors.white} h="70"  flexDirection="row" alignItems={"center"} >
            <Box>
            <Image alt="paypal" height={30}  w="70" resizeMode="contain" source={require('../assets/products/discover.png')} />
            </Box>
            
                <Box>
                <Ionicons name="checkmark-circle-outline" size={24} color={Colors.main} />
                </Box>
            </Flex>

            <Button 
            rounded={50} 
            w="100%" 
            mt="6" 
            p="4" 
            bg={Colors.main} 
            fontSize="20" 
            _text={{
                fontSize:18,
                color:Colors.white,
                fontWeight:'bold'
            }}
            _pressed={{
                bg:Colors.main,
                _text:{
                    fontWeight:"bold"
                }
            }}
            >
            CONTINUE
            </Button>
            <Text textAlign={"center"} fontStyle="italic" fontSize={16} >
                Payment method is <Text fontStyle="italic" fontWeight={"bold"}>Paypal</Text> by default
            </Text>
          </VStack>
            
       
       </Box>
   </Box>
)
} 