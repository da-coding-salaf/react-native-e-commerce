import { Box, Button, Heading, Image, Input, VStack, Pressable, Text, FormControl, ScrollView } from "native-base"

import Colors from "./color.js"
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function Profile(){
return(
   <Box flex={1} p="4"  pt="4" bg={Colors.white} >
          <FormControl >
         <ScrollView showsVerticalScrollIndicator={false}>
         <VStack space={3}   >
          <Box>
          <FormControl.Label>FULLNAME</FormControl.Label>
            <Input type="text" _focus={{
                bg:Colors.subGreen,
                borderColor:Colors.main
            }} bg={Colors.subGreen} 
            defaultValue="Olasunkanmi Abass"  />

          </Box>
          <Box>
          <FormControl.Label>USERNAME</FormControl.Label>
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
        <FormControl.Label>NEW PASSWORD</FormControl.Label>
                    <Input type="password" _focus={{
                        bg:Colors.subGreen,
                        borderColor:Colors.main
                    }} bg={Colors.subGreen} 
                    defaultValue="dacodingsalaf@gmail.com"  />
        </Box>

        <Box>
        <FormControl.Label>CONFIRM PASSWORD</FormControl.Label>
                    <Input type="password" _focus={{
                        bg:Colors.subGreen,
                        borderColor:Colors.main
                    }} bg={Colors.subGreen} 
                    defaultValue="dacodingsalaf@gmail.com"  />
        </Box>

        <Box>
                  <Button bg={Colors.main} _pressed={{
                    bg:Colors.main,
                    fontWeight:"bold"
                  }}>
                    UPDATE PROFILE
                  </Button>
        </Box>
          </VStack>
         </ScrollView>
        </FormControl>
   </Box>
)
} 