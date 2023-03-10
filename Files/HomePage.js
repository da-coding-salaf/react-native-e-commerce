import { Box, Button, Heading, HStack, Image, Input, VStack,Pressable, Text, StatusBar, ScrollView, Flex } from "native-base"
import Colors from "./color"
import { FontAwesome5 } from '@expo/vector-icons'; 
import HeadingHome from "./HeadingHome"
import Rating from "./Rating"
import Products from "./products";
import { useState } from "react";
export default function HomePage(){
   const [wer, setWer]=useState({
      image:"1.png"
   })
return(
   <Box flex={1} bg={Colors.subGreen} safeArea>
    <HeadingHome />
    <Box flex={1} p={3} >
       <ScrollView showsVerticalScrollIndicator={false}>
       <Flex direction="row" wrap="wrap" justifyContent="space-around" space="10">
       {Products.map((products,key)=>(
         <Pressable onPress={()=>{
            console.log(products.name)
         }} key={key} bg={Colors.white} mt="2" p="3" shadow={""}  overflow={"hidden"} w="40" >
         <Box w="full" h="120" mb="1"  >
         <Image alt={products.image} resizeMode="contain" w="full" h="full"  source={{uri:products.image}} />
         </Box>

         <Heading size={"sm"}>${products.price.toLocaleString('en-US')}</Heading>  
         <Box>
            <Rating value={products.rating} />
         </Box>
         <Text isTruncated  fontSize={20} fontWeight={"bold"}>{products.name}</Text>
         <Text isTruncated >{products.description}</Text>
      </Pressable>
       ))}
      </Flex>
       </ScrollView>
    
    </Box>

   </Box>
)
} 