drop table if exists helo_users;
drop table if exists posts;

create table helo_users (
    id serial primary key,
    username varchar(100),
    password varchar(100),
    profile_pic text
);

create table posts (
    id serial primary key,
    title varchar(100),
    img text,
    content text,
    author_id integer references helo_users(id)
);

insert into helo_users ( username, password, profile_pic)
 values 
('desperate_enuf', 'pass1', 'https://imgix.bustle.com/uploads/image/2018/10/29/f4c3a7c8-fc5d-4fa0-9676-f85360fa2f22-fotolia_190928973_subscription_monthly_m.jpg?w=960&h=540&fit=crop&crop=faces&auto=format&q=70'),
('herpes_free_since_03', 'pass2', 'https://m.media-amazon.com/images/I/51yL023V6kL._SR500,500_.jpg'),
('hoosier_daddy', 'pass3', 'https://i.ytimg.com/vi/5yFfCAaedgA/maxresdefault.jpg'),
('tea_baggins', 'pass4', 'https://img.huffingtonpost.com/asset/5cde7e302100005800809061.jpeg?cache=G1nVn8p1ku&ops=336_189%2Cquality_75'),
('ben_aflek_is_an_ok_actor', 'pass5', 'https://boygeniusreport.files.wordpress.com/2016/05/scared-surprised-cat-face.jpg?quality=98&strip=all&w=782');

insert into posts(title, img, content, author_id)
values
('desperate_enuf', 'https://i743.photobucket.com/albums/xx80/KenomeChan/676334108CAZSIESR.png?width=250&height=250&crop=1:1,smart', 'posting stuff on this post thing',1  ),
('hoosier_daddy', 'https://i65.photobucket.com/albums/h214/L_The_Legend/DeathNoteS01E09E.png?width=250&height=250&crop=1:1,smart', 'posty malogna?',2  ),
('ben_aflek_is_an_ok_actor', 'https://i217.photobucket.com/albums/cc312/mastersig/Avitars/For%20Me/DAngel.png?width=250&height=250&crop=1:1,smart', 'blah, blah, blah, blah, blahhhhhh!!!!..... I am so tired.',3  );

select * from helo_users;
select * from posts;





