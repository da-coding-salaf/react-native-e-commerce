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

export default function SwiptItems(){
return(
   <Box flex={1} bg={Colors.subGreen} p="5" pb="0" pt="0" >
     <SwipeListView w="100%" showsVerticalScrollIndicator={false}
            data={Products}
            previewOpenDelay={3000}
            renderItem={(data) => (
               <Pressable>
                 <Box w="100%" h={40} mb='2' bg={Colors.white} overflow="hidden" rounded="10" overflow={"hidden"}>
                   <HStack >
                    <Box w="30%" h="40" bg={Colors.deepGray} p="2" >
                        <Image source={{uri:data.item.image}} w="full" h="full" alt={data.item.name} resizeMode="contain"  />
                    </Box>
                    <Box w="55%" h="full" bg={Colors.white} >
                    <VStack p="4" justifyContent={"center"}  h="full">
                    <Box>
                            <Heading>{data.item.name}</Heading> 
                        </Box>
                        <Box>
                            <Text isTruncated>{data.item.description}</Text> 
                        </Box>
                        <Box>
                        <Heading size={"sm"}>${data.item.price.toLocaleString('en-US')}</Heading>  
                        </Box>
                    </VStack>
                    </Box>
                    <Box w="15%" h={"full"} pr="4"  justifyContent="center">
                        <Box bg={Colors.main} p="3" rounded={5}>
                            <Center _text={{fontWeight:600}}>5</Center>
                        </Box>
                    </Box>
                   </HStack>
                </Box>
               </Pressable>
            )}
            renderHiddenItem={(data) => (
                <Box w="100%" alignItems={"flex-end"} h="40"  mb='2' rounded={10} overflow={"hidden"} >
                     <Pressable>
                     <Box bg={Colors.red} p="1" justifyContent={"center"} alignItems={"center"} w="50" h={"full"} al >
                    <FontAwesome5 name="trash-alt" size={24} onPress={()=>(console.log(data.item.id))} color="white" />
                        </Box>
                    </Pressable>
                </Box>
            )}
            disableRightSwipe={true}
            rightOpenValue={-50}
        />
   </Box>
)
} 