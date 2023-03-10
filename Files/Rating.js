import { Box, Button, Heading, Image, Input, VStack,Pressable, Text,HStack } from "native-base"
import { FontAwesome } from '@expo/vector-icons';
import Colors from "./color.js"
import { useState } from "react";

export default function Rating({value}){
    return(
        <HStack>
            {(value>=1) ? 
            <FontAwesome name="star" size={12} color={Colors.orange} /> 
            : 
            (value >=0.5) ? <FontAwesome name="star-half-full" size={12} color={Colors.orange} />
            :
            <FontAwesome name="star-o" size={12} color={Colors.orange} />
            }

            {(value>=2) ? 
            <FontAwesome name="star" size={12} color={Colors.orange} /> 
            : 
            (value >=1.5) ? <FontAwesome name="star-half-full" size={12} color={Colors.orange} />
            :
            <FontAwesome name="star-o" size={12} color={Colors.orange} />
            }

             {(value>=3) ? 
            <FontAwesome name="star" size={12} color={Colors.orange} /> 
            : 
            (value >=2.5) ? <FontAwesome name="star-half-full" size={12} color={Colors.orange} />
            :
            <FontAwesome name="star-o" size={12} color={Colors.orange} />
            }   

            {(value>=4) ? 
            <FontAwesome name="star" size={12} color={Colors.orange} /> 
            : 
            (value >=3.5) ? <FontAwesome name="star-half-full" size={12} color={Colors.orange} />
            :
            <FontAwesome name="star-o" size={12} color={Colors.orange} />
            }

            {(value>=5) ? 
            <FontAwesome name="star" size={12} color={Colors.orange} /> 
            : 
            (value >=4.5) ? <FontAwesome name="star-half-full" size={12} color={Colors.orange} />
            :
            <FontAwesome name="star-o" size={12} color={Colors.orange} />
            }
        </HStack>
)
} 