import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{ my:15, textAlign: 'center', p:2, "& h4": {fontWeight:'bold', my:4, fontSize:'2rem'}, 
      "& p": {textAlign: 'justify'}, "@media (max-width:600px)": {mt:0, "& h4": {fontSize: '1.5rem'}} }}>
        <Typography variant='h4'>
          Welcome To My Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam dicta eos soluta in 
          illo veritatis modi voluptate tempora sunt. Ab perspiciatis facilis ad quibusdam maiores 
          nesciunt quam optio non, explicabo quis illum amet cumque earum inventore molestiae 
          voluptate veniam. Nam, est adipisci fugiat facilis tempore quas culpa qui quasi aut 
          nesciunt illo corporis, aliquam natus ipsum exercitationem minus dolor ullam animi 
          officia earum! Velit maiores modi aut repudiandae sapiente ut delectus voluptatem, 
          nisi incidunt doloremque esse consequuntur ipsum ratione quod illum officiis, voluptas 
          hic. Optio dignissimos ipsam unde minus vitae officiis tempora doloribus veniam. 
          Officiis error nostrum ea odio!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos nostrum 
          et quaerat eaque explicabo facere, nulla dolor ipsa tempora quisquam repellat enim. 
          Cumque alias animi dolore, illum aspernatur nostrum impedit fugit quia, magnam aliquid 
          odio eaque voluptatem nesciunt perspiciatis nisi fuga facilis eius. Quam labore voluptas 
          nihil recusandae ad exercitationem eaque incidunt dolorem expedita sapiente facere, 
          ducimus praesentium placeat eos reiciendis. Aliquid ut quis culpa doloremque praesentium, 
          neque incidunt reprehenderit molestias cupiditate molestiae autem iste natus in magnam 
          facilis dolorem rerum voluptate cumque ratione. Laboriosam veniam, quis omnis ullam error 
          harum natus nisi odio quas, consequatur similique dolorum voluptatibus.
        </p>
      </Box>
    </Layout>
  )
}

export default About
