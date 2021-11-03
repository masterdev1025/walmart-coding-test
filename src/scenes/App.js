import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './components/header';
import UsersTable from './components/usersTable';
import AgeSelect from './components/ageSelect';
import AgeListTable from './components/ageListTable';
const App = (props) => {
    return (
        <Container fixed>
            <Header />
            <UsersTable/>
            <AgeSelect/>
            <AgeListTable/>
        </Container>
    )
}

export default App;