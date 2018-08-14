create table tournament
(
	name varchar(100) not null
		constraint tournament_pkey
			primary key,
	tournament json not null,
	finished boolean default false not null,
	version integer default 1 not null
)
;

comment on table tournament is 'Contains all tournaments'
;

create unique index tournament_name_uindex
	on tournament (name)
;

