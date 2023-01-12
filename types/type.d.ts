interface SanityBody {
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}

interface Image extends SanityBody {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference"
  }
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  profilePic: Image;
  name: string;
}

export interface Socials extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}