export interface Skill {
  id: number
  name: string
  category: string
  proficiency: number
}

export interface Education {
  id: number
  institution: string
  degree: string
  field: string
  start_year: number
  end_year: number | null
  grade?: string
  description?: string
}

export interface Experience {
  id: number
  company: string
  role: string
  employment_type: string
  start_date: string
  end_date: string | null
  description: string
  tech_stack: string[]
}

export interface Certification {
  id: number
  title: string
  issuer: string
  issue_date: string
  expiry_date?: string | null
  credential_id?: string
  credential_url?: string
}
