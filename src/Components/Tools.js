import React, {Component} from 'react';
import {Card, CardMenu, CardTitle, Grid, Cell, CardText, CardActions, IconButton, Button} from 'react-mdl';

class Tools extends Component {
    render() {
        return(
            <div className="category-tabs">
                {/* <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState ({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs> */}

            <section className="projects-grid">
                <Grid>
                    <Cell col={6}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '306px', background: 'url(https://s3.amazonaws.com/s3.roaringapps.com/assets/icons/1561251841927-Insomnia.png) center / cover'}}>Insomnia</CardTitle>
                        <CardText>
                        <p>Description of application</p>
                        <p>What QEs use Insomnia for</p>
                        <p>Setup Steps</p>
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/javayporter/Burger" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Download (Mac)</Button>
                        </a>
                        </CardActions>
                        <CardActions border>
                        <a href="https://jpeat-da-burger.herokuapp.com/" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Download (Windows)</Button>
                        </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col ={6}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '306px', background: 'url(https://github.com/uw-labs/bloomrpc/blob/master/resources/blue/256x256.png?raw=true) center / cover'}}>BloomRPC</CardTitle>
                        <CardText>
                        <p>Description of application</p>
                        <p>What QEs use BloomRPC for</p>
                        <p>Setup Steps</p>
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/javayporter/Team_Generator" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Download (Mac)</Button>
                        </a>
                        </CardActions>
                        <CardActions border>
                        <a href="https://jpteam-generator.herokuapp.com/" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Download (Windows)</Button>
                        </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col ={6}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '306px', background: 'url(https://img2.pngio.com/mysql-logo-png-download-512512-free-transparent-mysql-mysql-workbench-png-900_520.jpg) center / cover'}}>MySQL Workbench</CardTitle>
                        <CardText>
                        <p>Description of application</p>
                        <p>What QEs use MySQL Workbench for</p>
                        <p>Setup Steps</p>
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/javayporter/Note_Taker" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Download (Mac)</Button>
                        </a>
                        </CardActions>
                        <CardActions border>
                        <a href=" https://fast-fortress-39105.herokuapp.com/" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Download (Windows)</Button>
                        </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col ={6}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '306px', background: 'url(https://user-images.githubusercontent.com/10379994/31985754-c56b8dba-b998-11e7-9705-a7f984433049.png) center / cover'}}>Visual Studio Code</CardTitle>
                        <CardText>
                        <p>Description of application</p>
                        <p>What QEs use VS Code for</p>
                        <p>Setup Steps</p>
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/javayporter/User_Directory" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Download (Mac)</Button>
                        </a>
                        </CardActions>
                        <CardActions border>
                        <a href="https://jpsuer-directory.herokuapp.com/" rel="noopener noreferrer" target="_blank">   
                        <Button colored>Download (Windows)</Button>
                        </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            </section>
            
            </div>
        )
    }
}

export default Tools;