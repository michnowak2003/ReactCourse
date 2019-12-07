import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{

    return(
       <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail 
                    authorName='Michal1' 
                    avatar={faker.image.avatar()} 
                    timeAgo='Today at 6:00PM'
                    description='super blog!'
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    authorName='Michal2' 
                    avatar={faker.image.avatar()} 
                    timeAgo='Today at 6:00PM'
                    description='super blog!2'
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    authorName='Michal3' 
                    avatar={faker.image.avatar()} 
                    timeAgo='Today at 6:00PM'
                    description='super blog!3'
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    authorName='Michal4' 
                    avatar={faker.image.avatar()} 
                    timeAgo='Today at 6:00PM'
                    description='super blog!4'
                />
            </ApprovalCard>   
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))