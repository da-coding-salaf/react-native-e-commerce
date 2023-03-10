import { Box, Button, Heading, Image, Input, VStack, Pressable, Text, FormControl, ScrollView, Center } from "native-base"

import Colors from "./color.js"
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function Delivery(){
return(
   <Box flex={1}   bg={Colors.white} safeArea >
    <Box p="3" bg={Colors.main}>
       <Center>
       <Text fontSize={18} fontWeight="bold" color={Colors.white}>DELEVERY ADDRESS</Text>
       </Center>
    </Box>
         <Box p="3">

         <FormControl >
         <ScrollView showsVerticalScrollIndicator={false}>
         <VStack space={3}   >
          <Box>
          <FormControl.Label>ENTER CITY</FormControl.Label>
            <Input type="text" _focus={{
                bg:Colors.subGreen,
                borderColor:Colors.main
            }} bg={Colors.subGreen} 
            defaultValue="Olasunkanmi Abass"  />

          </Box>
          <Box>
          <FormControl.Label>ENTER COUNTRY</FormControl.Label>
            <Input type="text" _focus={{
                bg:Colors.subGreen,
                borderColor:Colors.main
            }} bg={Colors.subGreen} 
            defaultValue="dacodingsalaf"  />

          </Box>
        <Box>
        <FormControl.Label>EMAIL</FormControl.Label>
                    <Input type="email" _focus={{
                        bg:Colors.subGreen,
                        borderColor:Colors.main
                    }} bg={Colors.subGreen} 
                    defaultValue="dacodingsalaf@gmail.com"  />
        </Box>

        <Box>
        <FormControl.Label>ENTER POSTAL CODE</FormControl.Label>
                    <Input type="password" _focus={{
                        bg:Colors.subGreen,
                        borderColor:Colors.main
                    }} bg={Colors.subGreen} 
                    defaultValue="dacodingsalaf@gmail.com"  />
        </Box>

        <Box>
        <FormControl.Label>ENTER ADDRESS</FormControl.Label>
                    <Input type="password" _focus={{
                        bg:Colors.subGreen,
                        borderColor:Colors.main
                    }} bg={Colors.subGreen} 
                    defaultValue="dacodingsalaf@gmail.com"  />
        </Box>

        <Box>
                  <Button p="4" rounded={5} bg={Colors.main} _pressed={{
                    bg:Colors.main,
                    fontWeight:"bold"
                  }}>
                    CONTINUE
                  </Button>
        </Box>
          </VStack>
         </ScrollView>
        </FormControl>

         </Box>
   </Box>
)
} 