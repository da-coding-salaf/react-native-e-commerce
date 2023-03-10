import { Box, Button, Heading, HStack, Image, Input, 
    VStack,Pressable, Text, StatusBar, Select, CheckIcon,
     ScrollView, Flex, Spacer, Center, FormControl,
     TextArea } from "native-base"
import Colors from "./color"
import { FontAwesome5 } from '@expo/vector-icons'; 
import HeadingHome from "./HeadingHome" 
import Rating from "./Rating"
import Products from "./products";
import { useState } from "react";
import NumericInput from 'react-native-numeric-input'
export default function SingleProductPage(){
   const [wer, setWer]=useState(0)
return(
   <Box flex={1} bg={Colors.white} p="5" safeArea>
    <ScrollView showsVerticalScrollIndicator={false}>
    <VStack space={4}>
            <Box w="full" h="200" bg={Colors.white} mt="5">
            <Image  alt="one"
            source={{uri: "https://res.cloudinary.com/dacodingsalaf/image/upload/v1677833155/6_lixog4.png" }}
                w="full"
                h="full"
                resizeMode="contain"
            />
            </Box>
            <Box>
            <Heading>Wellington boots</Heading>
             <Rating value={4} />
            </Box>
            <Box>

            <NumericInput 
            onChange={value => setWer({value})} 
            // onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={150} 
            totalHeight={30} 
            iconSize={35}
            step={1}
            minValue={1}
            maxValue={20}
            editable={false}
            valueType='integer'
            rounded
            separatorWidth={0} 
            reachMaxIncIconStyle={
                {
                    color:Colors.black
                }
            }
            reachMinDecIconStyle={
                {
                   color:Colors.black
                }
            }
            textColor={Colors.main} 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
            />
            </Box>
            <Box>
                <Text>
                This shoe is an item of footwear intended to protect and comfort the human foot while the wearer is doing various activities. Shoes are also used as an item of decoration and fashion.
                To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.
                We can wrap the expensive function call with useMemo.
                The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.
                In the following example, the expensive function will only run when count is changed and not when todo's are added.
                In the following example, the expensive function will only run when count is changed and not when todo's are added.
                </Text>
            </Box>
            <Box>
            <Button 
            rounded={50} 
            w="100%" 
           
            p="3" 
            bg={Colors.main} 
            fontSize="20" 
            _text={{
                fontSize:18
            }}
            _pressed={{
                bg:Colors.main,
                _text:{
                    fontWeight:"bold"
                }
            }}
            >
            ADD TO CART
            </Button>
            </Box>
            <Box mt="3">
            <Heading size="sm" >
                REVIEW
            </Heading>
            <Box bg={Colors.subGreen} mt="2" p="4" rounded="5" >
                <Center _text={
                    {
                        fontWeight:"bold",
                        color:Colors.main    
                       }
                }>NO REVIEW</Center>
            </Box>

            <Box mt="3" p="3" bg={Colors.subGreen} rounded={5}>
                <Heading size="sm" mb="1.1">User Doe</Heading>
                <Rating   value={4} />
                <Text mt="0.1" fontWeight={"bold"} >
                    Jan 12 2022.
                </Text>
                <Box mt="2.1" >
                    <Text>
                    Shoe is an item of footwear intended to protect and comfort the human foot while the wearer is doing various activities. Shoes are also used as an item of decoration and fashion.
                    </Text>
                </Box>
            </Box>
            <Box mt="4">
            <Heading size="sm" mb="2"  >REVIEW THIS PRODUCT</Heading>
           <FormControl>
           <Select selectedValue={wer} 
            bg={Colors.subGreen}
            borderWidth={0}
            minWidth="200" accessibilityLabel="Rate Product" 
            placeholder="Choose Service" 
            _selectedItem={{
                bg: Colors.subGreen,
            endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setWer(itemValue)}>
          <Select.Item label="1-Bad" value="1-Bad" />
          <Select.Item label="2-Fair" value="2-Fair" />
          <Select.Item label="3-Good" value="3-Good" />
          <Select.Item label="4-Better" value="4-Better" />
          <Select.Item label="5-Best" value="5-Best" />
        </Select>
           </FormControl>
           <Box mt="2">
            </Box>    
        <FormControl>
            <FormControl.Label>
                Comment
            </FormControl.Label>
            <TextArea value={"This product is Good"} 
            color={Colors.deepestGray}    
            w="100%"
            borderWidth={0}
            _focus={{
                bg:Colors.subGreen
            }}    
            />
            <Button 
            rounded={50} 
            w="100%" 
            p="3" 
            mt="3"
            bg={Colors.main} 
            fontSize="20" 
            _text={{
                fontSize:18
            }}
            _pressed={{
                bg:Colors.main,
                _text:{
                    fontWeight:"bold"
                }
            }}
            >
            SUBMIT
            </Button>
        </FormControl>
                </Box>
            </Box>
    </VStack>
    </ScrollView>
   </Box>
)
} 