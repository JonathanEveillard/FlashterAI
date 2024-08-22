import { Welcome } from '@/components/welcome'
import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LogIn from '@/components/LogIn'
import { Container, AppBar,Toolbar,Typography,Button, Box} from "@mui/material";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/clerk-react";


const page = () => {
  return (
    <div>
      <Header/>
        <div>
        <Container maxWidth="sm">
            <AppBar sx={{backgroundColor: '#3f51b5'}} position="static">
                <Toolbar>

                    <Typography variant="h6" sx={{ flexGrow:1,}}>
                        Flashcard Saas
                    </Typography>

                    <Button color="inherit">
                        <Link href="/login" passHref>
                            Login
                        </Link>
                    </Button>

                    <Button color="inherit">
                        <Link href="/signup" passHref>
                            Sign In
                        </Link>
                    </Button>


                </Toolbar>
            </AppBar>

            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                Sign In
            </Box>
            <LogIn/>
        </Container>
        </div>
      <Footer />
    </div>
  )
}

export default page