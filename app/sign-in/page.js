import { Container, AppBar,Toolbar,Typography,Button, Box} from "@mui/material";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {

    return 
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
            <SignIn/>
        </Container>
}