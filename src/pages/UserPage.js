import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	Grid,
	CardContent,
	Card,
} from '@material-ui/core';
import Moment from 'react-moment';
const UserPage = () => {
	const [data, setData] = useState([]);

	const getData = async () => {
		const res = await axios.get(`https://randomuser.me/api/?page=1&results=30`);
		console.log(res);
		const data = res.data.results;
		setData(data);
		console.log(data);
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<div>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6'>User Listing</Typography>
				</Toolbar>
			</AppBar>
			<Container style={{ paddingTop: 10 }} maxWidth='xl'>
				<Grid container spacing={3}>
					{data &&
						data.map((item, index) => (
							<Grid key={index} item xs={12} md={4} xl={4} lg={4}>
								<Card
									style={{
										display: 'flex',
										justifyContent: 'flexStart',
										alignItems: 'center',
									}}
									variant='outlined'>
									<div style={{ padding: 5 }}>
										<img
											src={item.picture.thumbnail}
											style={{ borderRadius: '50%' }}
											alt=''
										/>
									</div>
									<CardContent>
										<div
											style={{
												flexDirection: 'row',
												display: 'flex',
												paddingBottom: 5,
											}}>
											<Typography
												variant='body2'
												style={{ fontWeight: 600 }}
												color='textSecondary'>
												{item.name.first}
											</Typography>
											<Typography
												variant='body2'
												style={{ fontWeight: 600 }}
												color='textSecondary'>
												{item.name.last}
											</Typography>
										</div>

										<Moment format='DD/MM/YYYY'>{item.dob.date}</Moment>

										<Typography
											variant='body2'
											color='textSecondary'
											style={{ fontWeight: 600 }}>
											{item.email}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
				</Grid>
			</Container>
		</div>
	);
};

export default UserPage;
